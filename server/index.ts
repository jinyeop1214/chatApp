import http from "http";
import cors from "cors";
import express from "express";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
import {
	ClientToServerEvents,
	InterServerEvents,
	ServerToClientEvents,
	SocketData,
} from "./interfaces";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const server = http.createServer(app);
const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData
>(server, {
	cors: {
		origin: ["http://localhost:3000", "https://admin.socket.io"],
		credentials: true,
	},
});

instrument(io, {
	auth: false,
});

const publicRooms = () => {
	const {
		sockets: {
			adapter: { sids, rooms },
		},
	} = io;
	const publicRooms: string[] = [];
	rooms.forEach((_, key) => {
		if (sids.get(key) === undefined) publicRooms.push(key);
	});
	return publicRooms;
};

const countRoom = (roomname: string) =>
	io.sockets.adapter.rooms.get(roomname)?.size ?? -1;

io.on("connection", (socket) => {
	socket.onAny((event) => {
		console.log(`Socket Event: ${event}`);
	});
	socket.on("nickname", (name, done) => {
		socket.data.name = name;
		done();
		io.sockets.emit("room_change", publicRooms());
	});
	socket.on("enter_room", (roomname, done) => {
		socket.join(roomname);
		done(countRoom(roomname));
		socket
			.to(roomname)
			.emit(
				"welcome",
				socket.data.name ?? "Anon user",
				countRoom(roomname)
			); // emit = 내소켓 빼고 방안에(to) 있는 모든 소켓에게 보냄.
	});
	socket.on("disconnecting", () => {
		socket.rooms.forEach((room) =>
			socket
				.to(room)
				.emit(
					"bye",
					socket.data.name ?? "Anon user",
					countRoom(room) - 1
				)
		);
	});
	socket.on("disconnect", () => {
		io.sockets.emit("room_change", publicRooms());
	});
	socket.on("new_message", (msg, room, done) => {
		socket.to(room).emit("new_message", `${socket.data.name}: ${msg}`);
		done();
	});
	socket.on("nickname", (name, done) => {
		socket.data.name = name;
		done();
	});
});

server.listen(4000, () => {
	console.log("Listening on localhost:4000");
});

//처음 소켓 생성 후 로그인 후 데이터베이스에서 속한 채팅방 등등 정보 가져와서 소켓에 넣어줘야함.
