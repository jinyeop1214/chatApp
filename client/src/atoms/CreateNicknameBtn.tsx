import React, { useState } from "react";
import CreateNicknameModal from "../molecules/CreateNicknameModal";

const CreateNicknameBtn = () => {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow((prev) => !prev);
	};

	return (
		<>
			<button onClick={toggleShow}>닉네임 생성</button>
			{show && <CreateNicknameModal toggle={toggleShow} />}
		</>
	);
};

export default CreateNicknameBtn;
