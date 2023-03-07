import React, { useEffect } from "react";
import io from "socket.io-client";
import Routes from "./Routes";

function App() {
	const socket = io("http://localhost:4000");

	useEffect(() => {
		return () => {
			socket.disconnect();
		};
	}, [socket]);

	socket.on("connect", () => {
		console.log(socket);
	});

	socket.emit("hello from client", "HELLO!");

	socket.on("hello from server", (msg) => {
		console.log(msg);
	});

	socket.on("disconnect", (reason) => {
		console.log(reason);
	});
	return <Routes />;
}

export default App;
