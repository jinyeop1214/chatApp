import React, { useContext } from "react";
import CreateRoomBtn from "../atoms/CreateRoomBtn";
import JoinRoomBtn from "../atoms/JoinRoomBtn";
import CreateNicknameBtn from "../atoms/CreateNicknameBtn";
import { RoomContext } from "../context/room";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";

const RoomMenu = () => {
	const { nickname } = useContext(UserContext);
	const { socket } = useContext(SocketContext);
	const { room, rooms } = useContext(RoomContext);
	console.log({ nickname, room, rooms, socket });

	return (
		<div>
			<CreateNicknameBtn />
			<CreateRoomBtn />
			<JoinRoomBtn />
		</div>
	);
};

export default RoomMenu;
