import React from "react";
import style from "./LoginHeader.module.css";
import Backspace from "../atoms/Backspace";

const LoginHeader = () => {
	return (
		<div className={style.header}>
			<Backspace />
		</div>
	);
};

export default LoginHeader;
