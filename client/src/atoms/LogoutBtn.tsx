import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
	const navigate = useNavigate();

	const handleNavStartPage = () => {
		navigate("/");
	};
	return <button onClick={handleNavStartPage}>로그아웃</button>;
};

export default LogoutBtn;
