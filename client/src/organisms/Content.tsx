import React from "react";
import RoomMenu from "../molecules/RoomMenu";
import style from "./Content.module.css";

const Content = () => {
	return (
		<div className={style.content}>
			<RoomMenu />
		</div>
	);
};

export default Content;
