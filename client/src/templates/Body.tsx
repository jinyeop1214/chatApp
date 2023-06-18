import React from "react";
import style from "./Body.module.css";
import Room from "./Room";
import Chat from "./Chat";
import Menu from "./Menu";

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
