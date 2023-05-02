import React, { ChangeEventHandler, useContext, useState } from "react";
import { RoomContext } from "../context/room";
import { SocketContext } from "../context/socket";

interface Props {
	toggle: () => void;
}

const JoinRoomModal = ({ toggle }: Props) => {
	const [roomId, setRoomId] = useState<string>("");
	const { socket } = useContext(SocketContext);
	const { setRoom, setRooms } = useContext(RoomContext);

	const handleChangeRoomId: ChangeEventHandler<HTMLInputElement> = (e) => {
		setRoomId(e.target.value);
	};

	//아직은 새 방 생성&입장과 똑같다.
	//존재하지 않는 방이면 에러.
	const handleJoinRoom = () => {
		socket.emit("enter_room", roomId, () => {
			console.log("Enter Room.");
			setRoom(roomId);
			setRooms((prev) => [...prev, roomId]);
			toggle();
		});
	};

	return (
		<div>
			<div>채팅방 ID를 입력하세요.</div>
			<input
				type="text"
				placeholder="채팅방 ID"
				value={roomId}
				onChange={handleChangeRoomId}
			/>
			<button onClick={roomId === "" ? undefined : handleJoinRoom}>
				입장
			</button>
		</div>
	);
};

export default JoinRoomModal;
