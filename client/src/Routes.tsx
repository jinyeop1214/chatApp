import React from "react";
import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

const Routes = () => {
	return (
		<ReactRouterRoutes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			{/* <Route path="/:roomId" element={<Room />} /> */}
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<Navigate replace to="/" />} />
		</ReactRouterRoutes>
	);
};

export default Routes;
