import React, { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import Routes from "./Routes";
import { SocketContextProvider } from "./context/socket";

/**
 * 소켓을 useContext 전역 변수로 관리.
 * 그 후 필요한 컴포넌트에서 사용.
 * 근데 이벤트 등록해 놓은 걸 감싸는 함수를 각 컴포넌트에서 사용.
 * @returns
 */
function App() {
	// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
	// 	"http://localhost:4000"
	// );

	// useEffect(() => {
	// 	return () => {
	// 		socket.disconnect();
	// 	};
	// }, [socket]);

	return (
		<SocketContextProvider>
			<Routes />
		</SocketContextProvider>
	);
}

export default App;
