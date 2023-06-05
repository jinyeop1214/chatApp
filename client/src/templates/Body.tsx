import React from "react";
import Room from "../organisms/Room";
import Chat from "../organisms/Chat";
import Menu from "../organisms/Menu";
import style from "./Body.module.css";

const Body = () => {
	return (
		<div className={style.body}>
			<Room />
			<Chat />
			<Menu />
		</div>
	);
};

export default Body;
