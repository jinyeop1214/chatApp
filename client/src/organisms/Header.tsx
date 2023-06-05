import React from "react";
import style from "./Header.module.css";
import { handleNaverBtnClick } from "../functions/HandleNaverBtnClick";

const Header = () => {
	const handleTalkLogoClick = () => {
		window.location.href = "/";
	};

	return (
		<div className={style.header}>
			<img
				alt="logo"
				className={style.naverlogo}
				src="/assets/naverlogo.png"
				onClick={handleNaverBtnClick}
			/>
			<div className={style.talklogo} onClick={handleTalkLogoClick}>
				톡톡
			</div>
		</div>
	);
};

export default Header;
