import React, { useState } from "react";
import CreateRoomModal from "../molecules/CreateRoomModal";

const CreateRoomBtn = () => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow((prev) => !prev);
	};

	return (
		<>
			<button onClick={toggleShow}>+ &nbsp;새 채팅방 생성</button>
			{show && <CreateRoomModal toggle={toggleShow} />}
		</>
	);
};

export default CreateRoomBtn;
