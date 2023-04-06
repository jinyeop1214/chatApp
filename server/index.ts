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

// const publicRooms = () => {
// 	const {
// 		sockets: {
// 			adapter: { sids, rooms },
// 		},
// 	} = io;
// 	const publicRooms: string[] = [];
// 	rooms.forEach((_, key) => {
// 		if (sids.get(key) === undefined) publicRooms.push(key);
// 	});
// 	return publicRooms;
// };

// const countRoom = (roomName: string) =>
// 	io.sockets.adapter.rooms.get(roomName)?.size;

io.on("connection", (socket) => {
	socket.data.name = "Anon";
	// socket.onAny((event) => {
	// 	console.log(`Socket Event: ${event}`);
	// });
	// socket.on("enter_room", (roomName, done) => {
	// 	socket.join(roomName);
	// 	done();
	// 	socket
	// 		.to(roomName)
	// 		.emit("welcome", socket.data.name, countRoom(roomName)); // 내소켓 빼고 방안에 있는 모든 소켓에게 보냄.
	// 	io.sockets.emit("room_change", publicRooms());
	// });
	// socket.on("disconnecting", () => {
	// 	socket.rooms.forEach((room) =>
	// 		socket.to(room).emit("bye", socket.data.name, countRoom(room) - 1)
	// 	);
	// });
	// socket.on("disconnect", () => {
	// 	io.sockets.emit("room_change", publicRooms());
	// });
	// socket.on("new_message", (msg, room, done) => {
	// 	socket.to(room).emit("new_message", `${socket.data.name}: ${msg}`);
	// 	done();
	// });
	// socket.on("nickname", (name, done) => {
	// 	socket.data.name = name;
	// 	done();
	// });
});

server.listen(4000, () => {
	console.log("Listening on localhost:4000");
});
