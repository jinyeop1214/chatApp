import React from "react";
import Button from "@mui/material/Button";

interface props {
	content: string;
	handleClick: () => void;
}

const NavBtn = ({ content, handleClick }: props) => {
	return (
		<Button variant="contained" onClick={handleClick}>
			{content}
		</Button>
	);
};

export default NavBtn;
