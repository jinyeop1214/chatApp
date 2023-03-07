import React from "react";
import { useNavigate } from "react-router-dom";
import ToggleAuth from "../atoms/ToggleAuth";
import SignupForm from "../molecules/SignupForm";

const Signup = () => {
	const navigate = useNavigate();

	const handleNavLoginPage = () => {
		navigate(`/auth/login`);
	};

	return (
		<div>
			<SignupForm />
			<ToggleAuth isUser={true} handleClick={handleNavLoginPage} />
		</div>
	);
};

export default Signup;
