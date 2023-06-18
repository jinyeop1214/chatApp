import React, { MouseEventHandler } from "react";

const AllRoomBtn = () => {
	const handleClickBtn: MouseEventHandler<HTMLDivElement> = () => {
		//전체 채팅방 보이기
	};

	return <div onClick={handleClickBtn}>전체</div>;
};

export default AllRoomBtn;
