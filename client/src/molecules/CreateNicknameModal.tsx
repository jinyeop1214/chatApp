import React, { ChangeEventHandler, useContext, useState } from "react";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";

interface Props {
	toggle: () => void;
}

const _CreateNicknameModal = ({ toggle }: Props) => {
	const [nickname, setNickname] = useState<string>("");
	const { socket } = useContext(SocketContext);
	const { setNickname: updateNickname } = useContext(UserContext);

	const handleChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
		setNickname(e.target.value);
	};

	const handleCreateNickname = () => {
		socket.emit("nickname", nickname, () => {
			console.log("Nickname Set.");
			updateNickname(nickname);
			toggle();
		});
	};

	return (
		<div>
			<div>닉네임을 입력하세요.</div>
			<input
				type="text"
				placeholder="닉네임"
				value={nickname}
				onChange={handleChangeNickname}
			/>
			<button
				onClick={nickname === "" ? undefined : handleCreateNickname}
			>
				등록
			</button>
		</div>
	);
};

export default _CreateNicknameModal;
