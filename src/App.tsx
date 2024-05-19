import { useEffect } from "react";
import { useAppSelector } from "./utils/hooks/redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";

function App() {
	const isLogin = useAppSelector((state) => state.user.isLogin);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (isLogin && location.pathname === "/") {
			return navigate("/home");
		}

		if (!isLogin && location.pathname !== "/") {
			return navigate("/");
		}
	}, [location, navigate, isLogin]);

	return (
		<Routes>
			<Route path="/" element={<AuthPage />} />
			<Route path="/home" element={<div>home</div>} />
		</Routes>
	);
}

export default App;
