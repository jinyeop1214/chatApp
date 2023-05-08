import React, { useContext } from "react";
import { RoomContext } from "../context/room";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";

const RoomMenu = () => {
	const { nickname } = useContext(UserContext);
	const { socket } = useContext(SocketContext);
	const { room, rooms } = useContext(RoomContext);
	console.log({ nickname, room, rooms, socket });

	return <div></div>;
};

export default RoomMenu;
