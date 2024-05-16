import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>인증 페이지</div>,
	},
]);

function App() {
	return (
		<>
			<div className="text-3xl">Hello World</div>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
