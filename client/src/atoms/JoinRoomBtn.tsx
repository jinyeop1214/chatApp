import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JoinRoomModal from "../molecules/JoinRoomModal";

const JoinRoomBtn = () => {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleJoinRoom = () => {
		//방 아이디 치는 칸 뜨게
		setShow((prev) => !prev);
	};

	return (
		<>
			<Button variant="contained" onClick={handleJoinRoom}>
				채팅방 입장하기
			</Button>
			{show && <JoinRoomModal />}
		</>
	);
};

export default JoinRoomBtn;
