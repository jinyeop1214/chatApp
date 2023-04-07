import { createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../interfaces";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
	"http://localhost:4000"
);

/**
 * server에서만 SocketData를 가질 수 있으니, 클라이언트 변수로 가지고 있어야겠다.
 */
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
