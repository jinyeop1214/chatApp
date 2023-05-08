import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const HomePage = () => {
	const navigate = useNavigate();
	const { userId } = useContext(UserContext);
	console.log({ userId });

	useEffect(() => {
		userId === "" && navigate(`/login`);
	}, [userId, navigate]);

	return <div>HomePage</div>;
};

export default HomePage;
