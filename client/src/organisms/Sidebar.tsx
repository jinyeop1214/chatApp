import React from "react";
import LogoutBtn from "../atoms/LogoutBtn";
import NewChatBtn from "../atoms/NewChatBtn";
import style from "./Sidebar.module.css";

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			{/* <NewChatBtn />
			<LogoutBtn /> */}
		</div>
	);
};

export default Sidebar;
