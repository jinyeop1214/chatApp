import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from "react";

export const UserContext = createContext<{
	userId: string;
	setUserId: Dispatch<SetStateAction<string>>;
	nickname: string;
	setNickname: Dispatch<SetStateAction<string>>;
}>({
	userId: "",
	setUserId: () => {},
	nickname: "",
	setNickname: () => {},
});

interface Props {
	children: ReactNode;
}

export const UserContextProvider = ({ children }: Props) => {
	const [userId, setUserId] = useState("");
	const [nickname, setNickname] = useState("");

	return (
		<UserContext.Provider
			value={{
				userId,
				setUserId,
				nickname,
				setNickname,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
