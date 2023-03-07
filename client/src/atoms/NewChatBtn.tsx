import React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NewChatBtn = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavChatPage = () => {
		location.pathname !== "/chat" && navigate(`/chat`);
	};

	return (
		<Button variant="contained" onClick={handleNavChatPage}>
			+ &nbsp;새로운 채팅
		</Button>
	);
};

export default NewChatBtn;
