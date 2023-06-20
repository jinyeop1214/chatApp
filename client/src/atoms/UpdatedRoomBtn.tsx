import React, { MouseEventHandler } from "react";
import style from "./UpdatedRoomBtn.module.css";

const UpdatedRoomBtn = () => {
	const handleClickBtn: MouseEventHandler<HTMLDivElement> = () => {
		//전체 채팅방 보이기
	};

	return (
		<div onClick={handleClickBtn} className={style.body}>
			<div>0</div>
			<div>안읽음</div>
		</div>
	);
};

export default UpdatedRoomBtn;
