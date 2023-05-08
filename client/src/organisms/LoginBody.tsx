import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import style from "./LoginBody.module.css";
import { handleNaverBtnClick } from "../functions/HandleNaverBtnClick";

const LoginBody = () => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [wrongtext, setWrongtext] = useState("");

	const handleUserId = (e: ChangeEvent<HTMLInputElement>) => {
		setUserId(e.target.value);
		setWrongtext("");
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setWrongtext("");
	};

	const loginByEnterbtn = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			handleLogInBtnClick();
		}
	};

	const handleLogInBtnClick = () => {
		if (userId === "" || password === "") {
			return setWrongtext("ID 혹은 비밀번호를 입력해주세요.");
		}
	};

	return (
		<div className={style.Body}>
			<img
				alt="logo"
				className={style.Naverlogo}
				src="/assets/loginnaverlogo.png"
				onClick={handleNaverBtnClick}
			/>
			<div className={style.Form}>
				<div className={style.Box}>
					<div className={style.InputIdwrapper}>
						<input
							className={style.InputId}
							value={userId}
							type="text"
							onChange={handleUserId}
							placeholder="아이디"
							autoFocus
						/>
					</div>
					<div className={style.InputPasswordwrapper}>
						<input
							className={style.InputPassword}
							value={password}
							type="password"
							onChange={handlePassword}
							placeholder="비밀번호"
							onKeyDown={(e) => loginByEnterbtn(e)}
						/>
					</div>
				</div>
				<div className={style.Warningtext}>{wrongtext}</div>
				<button className={style.btn} onClick={handleLogInBtnClick}>
					{" "}
					로그인{" "}
				</button>
				<a className={style.Signup} href="/signup">
					회원가입
				</a>
			</div>
		</div>
	);
};

export default LoginBody;
