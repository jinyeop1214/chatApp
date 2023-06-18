import React, { ChangeEventHandler, useState } from "react";

const RoomSearch = () => {
	const [value, setValue] = useState<string | undefined>(undefined);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		//
		setValue(e.target.value);
	};

	return <input onChange={handleChange} placeholder="대화방 이름 검색" />;
};

export default RoomSearch;
