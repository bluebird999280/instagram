import { Dispatch, SetStateAction, useState } from "react";
import MainMenu from "./MainMenu";
import SlideMenu from "./SlideMenu";
import DetailMenu from "./DetailMenu";
import Search from "./search/Search";
import Notification from "./notification/Notification";

interface IMenu {
	setView: Dispatch<
		SetStateAction<{
			modal: string;
			menuSlide: string;
		}>
	>;
}

function Menu({ setView }: IMenu) {
	const slideMenu = "search";
	const [isDetailMenuBarShown, setIsDetailMenuBarShown] = useState(false);
	const [extendMenu, setExtendMenu] = useState(true);
	return (
		<div className="flex h-dvh relative">
			<div className="flex flex-row h-full">
				<MainMenu
					extendMenu={extendMenu}
					setView={setView}
					setExtendMenu={setExtendMenu}
					setIsDetailMenuBarShown={setIsDetailMenuBarShown}
				/>

				<SlideMenu isSliding={!extendMenu && slideMenu !== ""}>
					<>
						{slideMenu === "search" && <Search />}
						{slideMenu === "notification" && <Notification />}
					</>
				</SlideMenu>

				<DetailMenu isShown={isDetailMenuBarShown} />
			</div>
		</div>
	);
}

export default Menu;
