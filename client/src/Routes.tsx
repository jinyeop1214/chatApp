import React, { useState } from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Signup from "./pages/Signup";

const Routes = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<ReactRouterRoutes>
			<Route path="/auth/login" element={<Login />} />
			<Route path="/auth/signup" element={<Signup />} />
			<Route path="/auth" element={<Auth />} />
			<Route path="/chat/:roomId" element={<Room />} />
			<Route path="/chat" element={<Chat />} />
			<Route
				path="/"
				element={
					<Navigate replace to={isLoggedIn ? "/chat" : "/auth"} />
				}
			/>
			<Route path="*" element={<Navigate replace to="/" />} />
		</ReactRouterRoutes>
	);
};

export default Routes;
