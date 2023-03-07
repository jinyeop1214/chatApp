import React from "react";
import Content from "../organisms/Content";
import Sidebar from "../organisms/Sidebar";
import style from "./Container.module.css";

const Container = () => {
	return (
		<div className={style.container}>
			<Sidebar />
			<Content />
		</div>
	);
};

export default Container;
