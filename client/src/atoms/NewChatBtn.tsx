import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewChatBtn = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavChatPage = () => {
		location.pathname !== "/chat" && navigate(`/chat`);
	};

	return <button onClick={handleNavChatPage}>+ &nbsp;새로운 채팅</button>;
};

export default NewChatBtn;
