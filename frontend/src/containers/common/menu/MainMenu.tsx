import { useMemo, useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { setModal, setSlideMenu, toggleDetailMenu } from "@/slices/view";
import { useLocation, useNavigate } from "react-router-dom";
import MainMenu from "@/components/common/menu/MainMenu";

function MainMenuContainer() {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const slideMenu = useAppSelector((state) => state.view.slideMenu);
	const [currentClickedButton, setCurrentClickedButton] = useState("home");
	const extendMenu = useMemo(() => slideMenu === null, [slideMenu]);

	useEffect(() => {
		const currentPathName = location.pathname.split("/")[1];
		setCurrentClickedButton(currentPathName);

		if (currentPathName === "direct") {
			dispatch(setSlideMenu(""));
		}
	}, [dispatch, location]);

	const buttonOnClick = useCallback(
		(key: string) => () => {
			setCurrentClickedButton(key);

			if (
				["home", "explore", "reels", "direct", "profile"].includes(key)
			) {
				dispatch(setSlideMenu(null));
				navigate("/" + key);
				return;
			} else if (["search", "notification"].includes(key)) {
				if (key === currentClickedButton) {
					if (slideMenu === null) {
						dispatch(setSlideMenu(key));
					} else {
						const prevLocation = location.pathname.split("/")[1];

						if (prevLocation == "direct")
							dispatch(setSlideMenu(""));
						else dispatch(setSlideMenu(null));
						setCurrentClickedButton(prevLocation);
					}
					return;
				}
				dispatch(setSlideMenu(key));
			} else if ("threads" === key)
				window.open("https://threads.net", "_blank");
			else if ("createPost" === key) {
				dispatch(setModal(key));
				setCurrentClickedButton(currentClickedButton);
			} else if ("menu" === key) dispatch(toggleDetailMenu());
		},
		[
			slideMenu,
			location,
			navigate,
			dispatch,
			currentClickedButton,
			setCurrentClickedButton,
		]
	);

	return (
		<MainMenu
			extendMenu={extendMenu}
			buttonOnClick={buttonOnClick}
			currentClickedButton={currentClickedButton}
		/>
	);
}

export default MainMenuContainer;
