import React from "react";
import CreateRoomBtn from "../atoms/CreateRoomBtn";
import JoinRoomBtn from "../atoms/JoinRoomBtn";
import CreateNicknameBtn from "../atoms/CreateNicknameBtn";

const RoomMenu = () => {
	return (
		<div>
			<CreateNicknameBtn />
			<CreateRoomBtn />
			<JoinRoomBtn />
		</div>
	);
};

export default RoomMenu;
