import React from "react";
import RoomEntity from "../molecules/RoomEntity";

const RoomBody = () => {
	return (
		<div>
			{Array(10)
				.fill(1)
				.map((_ele, index) => {
					return <RoomEntity key={index} />;
				})}
		</div>
	);
};

export default RoomBody;
