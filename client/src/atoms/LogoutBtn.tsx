import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
	const navigate = useNavigate();

	const handleNavStartPage = () => {
		navigate("/");
	};
	return (
		<Button variant="contained" onClick={handleNavStartPage}>
			๋ก๊ทธ์์
		</Button>
	);
};

export default LogoutBtn;
