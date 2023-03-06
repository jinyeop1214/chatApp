import http from "http";
import cors from "cors";
import express from "express";
import { Server } from "socket.io";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		credentials: true,
	},
});

io.on("connection", (socket) => {
	console.log(socket);

	socket.emit("hello from server", "HI");

	socket.on("hello from client", (msg) => {
		console.log(msg);
	});

	socket.on("disconnect", (reason) => {
		console.log(reason);
	});
});

server.listen(4000, () => {
	console.log("Listening on localhost:4000");
});
