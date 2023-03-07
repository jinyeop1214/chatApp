import React from "react";
import { useNavigate } from "react-router-dom";
import NavBtn from "../atoms/NavBtn";

const Auth = () => {
	const navigate = useNavigate();

	const handleNavLoginPage = () => {
		navigate(`/auth/login`);
	};

	const handleNavSignupPage = () => {
		navigate(`/auth/signup`);
	};

	return (
		<div>
			<NavBtn content={`로그인`} handleClick={handleNavLoginPage} />
			<NavBtn content={`회원 가입`} handleClick={handleNavSignupPage} />
		</div>
	);
};

export default Auth;
