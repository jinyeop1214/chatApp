import React from "react";
import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	const handleLogOutBtnClick = () => {
		//logout
	};

	return (
		<div className={style.footer}>
			{/* {me ? (
                <button
                    className={style.footerlogbtn}
                    onClick={handleLogOutBtnClick}
                >
                    로그아웃
                </button>
            ) : ( */}
			<a className={style.footerlogbtn} href="/login">
				로그인
			</a>
			{/* )} */}
		</div>
	);
};

export default Footer;
