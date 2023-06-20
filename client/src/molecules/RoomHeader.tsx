import React from "react";
import AllRoomBtn from "../atoms/AllRoomBtn";
import UpdatedRoomBtn from "../atoms/UpdatedRoomBtn";
import RoomSearch from "../atoms/RoomSearch";
import style from "./RoomHeader.module.css";

const RoomHeader = () => {
	return (
		<div className={style.body}>
			<div className={style.toggles}>
				<AllRoomBtn />
				<UpdatedRoomBtn />
			</div>
			<RoomSearch />
		</div>
	);
};

export default RoomHeader;
