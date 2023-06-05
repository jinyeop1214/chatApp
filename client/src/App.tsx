import React from "react";
import Routes from "./Routes";
import { SocketContextProvider } from "./context/socket";
import { RoomContextProvider } from "./context/room";
import { UserContextProvider } from "./context/user";

/**
 * 소켓을 useContext 전역 변수로 관리.
 * 그 후 필요한 컴포넌트에서 사용.
 * 근데 이벤트 등록해 놓은 걸 감싸는 함수를 각 컴포넌트에서 사용.
 * @returns
 */
function App() {
	return (
		<SocketContextProvider>
			<UserContextProvider>
				<RoomContextProvider>
					<Routes />
				</RoomContextProvider>
			</UserContextProvider>
		</SocketContextProvider>
	);
}

export default App;
