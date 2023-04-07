import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext<{
	nickname: string;
	setNickname: React.Dispatch<React.SetStateAction<string>>;
}>({
	nickname: "",
	setNickname: () => {},
});

interface Props {
	children: ReactNode;
}

export const UserContextProvider = ({ children }: Props) => {
	const [nickname, setNickname] = useState("");

	return (
		<UserContext.Provider
			value={{
				nickname,
				setNickname,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
