import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import style from "./SignupBody.module.css";
import { handleNaverBtnClick } from "../functions/HandleNaverBtnClick";

const SignupBody = () => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [nickname, setNickname] = useState("");
	const [wrongtext, setWrongtext] = useState("");

	const handleUserId = (e: ChangeEvent<HTMLInputElement>) => {
		setUserId(e.target.value);
		setWrongtext("");
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setWrongtext("");
	};

	const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
		setNickname(e.target.value);
		setWrongtext("");
	};

	const signupByEnterbtn = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			handleSignUpBtnClick();
		}
	};

	const handleSignUpBtnClick = () => {
		if (userId === "" || password === "" || nickname === "") {
			return setWrongtext("ID, 비밀번호 혹은 닉네임을 입력해주세요.");
		}
	};

	return (
		<div className={style.Body}>
			<img
				alt="logo"
				className={style.NaverLogo}
				src="/assets/loginnaverlogo.png"
				onClick={handleNaverBtnClick}
			/>

			<div className={style.Form}>
				<div className={style.Box}>
					<div className={style.InputIdWrapper}>
						<input
							className={style.InputId}
							value={userId}
							type="text"
							onChange={handleUserId}
							placeholder="아이디"
							autoFocus
						/>
					</div>
					<div className={style.InputPasswordWrapper}>
						<input
							className={style.InputPassword}
							value={password}
							type="password"
							onChange={handlePassword}
							placeholder="비밀번호"
						/>
					</div>
					<div className={style.InputNicknameWrapper}>
						<input
							className={style.InputNickname}
							value={nickname}
							type="text"
							onChange={handleNickname}
							placeholder="닉네임"
							onKeyDown={(e) => signupByEnterbtn(e)}
						/>
					</div>
				</div>
				<div className={style.Warningtext}>{wrongtext}</div>
				<button className={style.btn} onClick={handleSignUpBtnClick}>
					{" "}
					회원가입{" "}
				</button>
			</div>
		</div>
	);
};

export default SignupBody;
