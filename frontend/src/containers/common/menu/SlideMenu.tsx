import { useAppSelector } from "@/utils/hooks";
import SlideMenu from "@/components/common/menu/SlideMenu";
import Search from "@/components/common/menu/search/Search";
import Notification from "@/components/common/menu/notification/Notification";

interface IChildBySlideMenu {
	[name: string]: React.ReactElement;
}

const childBySlideMenu: IChildBySlideMenu = {
	search: <Search />,
	notification: <Notification />,
};

function SlideMenuContainer() {
	const slideMenu = useAppSelector((state) => state.view.slideMenu);

	return (
		<SlideMenu>
			{slideMenu !== null ? childBySlideMenu[slideMenu] : slideMenu}
		</SlideMenu>
	);
}

export default SlideMenuContainer;
