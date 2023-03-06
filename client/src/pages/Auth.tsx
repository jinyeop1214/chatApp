import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
			<Button variant="contained" onClick={handleNavLoginPage}>
				Log In
			</Button>
			<Button variant="contained" onClick={handleNavSignupPage}>
				Sign Up
			</Button>
		</div>
	);
};

export default Auth;
