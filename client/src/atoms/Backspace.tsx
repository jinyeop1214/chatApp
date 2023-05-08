import React from "react";
import style from "./Backspace.module.css";
import { useNavigate } from "react-router-dom";

const Backspace = () => {
	const navigate = useNavigate();

	const handleLeftarrowBtnClick = () => {
		navigate(-1);
	};

	return (
		<div>
			<img
				alt="back"
				className={style.leftArrow}
				src="/assets/leftarrow.png"
				onClick={handleLeftarrowBtnClick}
			/>
		</div>
	);
};

export default Backspace;
