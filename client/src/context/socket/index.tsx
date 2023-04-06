import { createContext, ReactNode, useState } from "react";
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../interfaces";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
	"http://localhost:4000"
);

export const SocketContext = createContext<{
	socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}>({
	socket,
});

export const SocketContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
};
