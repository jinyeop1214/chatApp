import React, { useEffect } from "react";
import io from "socket.io-client";
import Routes from "./Routes";

/**
 * 소켓을 useContext 전역 변수로 관리.
 * 그 후 필요한 컴포넌트에서 사용.
 * 근데 이벤트 등록해 놓은 걸 감싸는 함수를 각 컴포넌트에서 사용.
 * @returns
 */
function App() {
	const socket = io("http://localhost:4000");

	useEffect(() => {
		return () => {
			socket.disconnect();
		};
	}, [socket]);

	socket.on("connect", () => {
		console.log(socket);
	});

	socket.emit("hello from client", "HELLO!");

	socket.on("hello from server", (msg) => {
		console.log(msg);
	});

	socket.on("disconnect", (reason) => {
		console.log(reason);
	});
	return <Routes />;
}

export default App;
