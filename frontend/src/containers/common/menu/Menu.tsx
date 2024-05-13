import MainMenu from "./MainMenu";
import SlideMenu from "./SlideMenu";
import DetailMenu from "./DetailMenu";

function Menu() {
	return (
		<div className="flex h-full relative">
			<MainMenu />
			<SlideMenu />
			<DetailMenu />
		</div>
	);
}

export default Menu;
