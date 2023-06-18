import React from "react";
import RoomHeader from "../molecules/RoomHeader";
import RoomBody from "../organisms/RoomBody";
import style from "./Room.module.css";

const Room = () => {
	return (
		<div className={style.body}>
			<RoomHeader />
			<RoomBody />
		</div>
	);
};

export default Room;
