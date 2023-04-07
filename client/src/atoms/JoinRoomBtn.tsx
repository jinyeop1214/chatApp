import React, { useState } from "react";
import JoinRoomModal from "../molecules/JoinRoomModal";

const JoinRoomBtn = () => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow((prev) => !prev);
	};

	return (
		<>
			<button onClick={toggleShow}>채팅방 입장</button>
			{show && <JoinRoomModal toggle={toggleShow} />}
		</>
	);
};

export default JoinRoomBtn;
