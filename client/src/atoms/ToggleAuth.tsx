import React from "react";
import style from "./ToggleAuth.module.css";

interface props {
	isUser: boolean;
	handleClick: () => void;
}

const ToggleAuth = ({ isUser, handleClick }: props) => {
	return (
		<div>
			{isUser ? `이미 계정이 있으신가요? ` : `계정이 없으신가요? `}
			<span onClick={handleClick} className={style.link}>
				{isUser ? `로그인하기` : `회원 가입하기`}
			</span>
		</div>
	);
};

export default ToggleAuth;
