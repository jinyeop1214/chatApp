import React from "react";
import { useNavigate } from "react-router-dom";

const AddRoomBtn = () => {
	const navigate = useNavigate();

	const handleAddRoom = () => {
		//이 유저 한 명이 포함된 새 채팅방 생성, 유저가 속한 채팅방 리스트에 추가. 새 방 id 리턴.
		//그 채팅방 페이지로 이동 /chat/:roomId --> navigate(`/chat/${roomId}`)
		console.log("Add New Room.");
	};

	return <button onClick={handleAddRoom}>+ &nbsp;새 채팅방 생성하기</button>;
};

export default AddRoomBtn;
