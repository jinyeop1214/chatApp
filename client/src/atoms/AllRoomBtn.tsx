import React, { MouseEventHandler } from "react";
import style from "./AllRoomBtn.module.css";

const AllRoomBtn = () => {
	const handleClickBtn: MouseEventHandler<HTMLDivElement> = () => {
		//전체 채팅방 보이기
	};

	return (
		<div onClick={handleClickBtn} className={style.body}>
			전체
		</div>
	);
};

export default AllRoomBtn;
