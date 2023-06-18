import React from "react";
import style from "./RoomEntity.module.css";

const RoomEntity = () => {
	return (
		<div className={style.body}>
			<div>이미지</div>
			<div>
				<div>채팅방 제목</div>
				<div>최근 채팅</div>
			</div>
		</div>
	);
};

export default RoomEntity;
