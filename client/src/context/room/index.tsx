import { createContext, ReactNode, useState } from "react";

export const RoomContext = createContext<{
	room: string;
	setRoom: React.Dispatch<React.SetStateAction<string>>;
	rooms: string[];
	setRooms: React.Dispatch<React.SetStateAction<string[]>>;
}>({
	room: "",
	setRoom: () => {},
	rooms: [],
	setRooms: () => {},
});

interface Props {
	children: ReactNode;
}

export const RoomContextProvider = ({ children }: Props) => {
	const [room, setRoom] = useState(""); //현재 방
	const [rooms, setRooms] = useState<string[]>([]); //내가 속한 방

	return (
		<RoomContext.Provider
			value={{
				room,
				setRoom,
				rooms,
				setRooms,
			}}
		>
			{children}
		</RoomContext.Provider>
	);
};
