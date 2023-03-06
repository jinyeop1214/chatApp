import React from "react";
import io from "socket.io-client";

function App() {
	const socket = io("http://localhost:4000");

	socket.on("connect", () => {
		console.log(socket);
	});

	socket.emit("hello from client", "HELLO!");

	socket.on("hello from server", (argv) => {
		console.log(argv, "ASD");
	});

	socket.on("disconnect", (reason) => {
		console.log(reason);
	});

	return <h1>websocket</h1>;
}

export default App;
