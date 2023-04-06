import React, { useContext } from "react";
import Container from "../templates/Container";
import { SocketContext } from "../context/socket";

const Chat = () => {
	const { socket } = useContext(SocketContext);
	console.log(socket);
	socket.emit("nickname", "Yeop", () => console.log(1));
	return <Container />;
};

export default Chat;
