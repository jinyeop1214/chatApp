import React from "react";

interface props {
	content: string;
	handleClick: () => void;
}

const NavBtn = ({ content, handleClick }: props) => {
	return <button onClick={handleClick}>{content}</button>;
};

export default NavBtn;
