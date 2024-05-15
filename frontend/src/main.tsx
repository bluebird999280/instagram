import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Modal from "@/containers/modal/Modal";
import AuthPage from "@/pages/Auth";
import HomePage from "@/pages/Home";
import ExplorePage from "@/pages/Explore";
import ReelsPage from "@/pages/Reels";
import DirectPage from "./pages/Direct";
import ProfilePage from "./pages/Profile";
import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthPage />,
	},
	{
		path: "/home",
		element: <HomePage />,
	},
	{
		path: "/explore",
		element: <ExplorePage />,
	},
	{
		path: "/reels",
		element: <ReelsPage />,
	},
	{
		path: "/direct",
		element: <DirectPage />,
	},
	{
		path: "/profile",
		element: <ProfilePage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Modal />
		<RouterProvider router={router} />
	</Provider>
);
