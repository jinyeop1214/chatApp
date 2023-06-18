import React from "react";
import AllRoomBtn from "../atoms/AllRoomBtn";
import UpdatedRoomBtn from "../atoms/UpdatedRoomBtn";
import RoomSearch from "../atoms/RoomSearch";

const RoomHeader = () => {
	return (
		<div>
			<AllRoomBtn />
			<UpdatedRoomBtn />
			<RoomSearch />
		</div>
	);
};

export default RoomHeader;
