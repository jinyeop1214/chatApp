import React from "react";
import { useNavigate } from "react-router-dom";
import ToggleAuth from "../atoms/ToggleAuth";
import LoginForm from "../molecules/LoginForm";

const Login = () => {
	const navigate = useNavigate();

	const handleNavSignupPage = () => {
		navigate(`/auth/signup`);
	};

	return (
		<div>
			<LoginForm />
			<ToggleAuth isUser={false} handleClick={handleNavSignupPage} />
		</div>
	);
};

export default Login;
