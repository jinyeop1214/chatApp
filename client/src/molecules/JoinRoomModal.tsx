import React, { ChangeEventHandler, useState } from "react";

/**
 * useForm 사용X -> input이 하나일때는 상태관리가 어렵지 않으니까?
 * @returns
 */
const JoinRoomModal = () => {
	const [id, setId] = useState<string>("");

	const handleChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
		setId(e.target.value);
	};

	const handleJoinRoomModal = () => {
		//그 방에 이 유저 추가
		//그 방 페이지로 이동 navigate()
		console.log(id);
	};

	return (
		<div>
			<div>채팅방 ID를 입력하세요.</div>
			<input
				type="text"
				placeholder="채팅방 ID"
				value={id}
				onChange={handleChangeId}
			/>
			<button onClick={id === "" ? undefined : handleJoinRoomModal}>
				입장
			</button>
		</div>
	);
};

export default JoinRoomModal;
