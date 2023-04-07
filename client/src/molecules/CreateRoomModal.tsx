import React, { ChangeEventHandler, useContext, useState } from "react";
import { SocketContext } from "../context/socket";
import { RoomContext } from "../context/room";

interface Props {
	toggle: () => void;
}
const CreateRoomModal = ({ toggle }: Props) => {
	const [roomId, setRoomId] = useState<string>("");
	const { socket } = useContext(SocketContext);
	const { setRoom } = useContext(RoomContext);

	const handleChangeRoomId: ChangeEventHandler<HTMLInputElement> = (e) => {
		setRoomId(e.target.value);
	};

	const handleCreateRoom = () => {
		socket.emit("enter_room", roomId, () => {
			console.log("Enter Room.");
			setRoom(roomId);
			toggle();
		});
	};

	return (
		<div>
			<div>새 채팅방 ID를 입력하세요.</div>
			<input
				type="text"
				placeholder="채팅방 ID"
				value={roomId}
				onChange={handleChangeRoomId}
			/>
			<button onClick={roomId === "" ? undefined : handleCreateRoom}>
				입장
			</button>
		</div>
	);
};

export default CreateRoomModal;
