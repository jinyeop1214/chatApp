import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import Header from "../organisms/Header";
import Body from "../templates/Body";
import Footer from "../organisms/Footer";
import style from "./HomePage.module.css";

const HomePage = () => {
	const navigate = useNavigate();
	const { userId } = useContext(UserContext);
	console.log({ userId });

	// useEffect(() => {
	// 	userId === "" && navigate(`/login`);
	// }, [userId, navigate]);

	return (
		<div className={style.body}>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default HomePage;
