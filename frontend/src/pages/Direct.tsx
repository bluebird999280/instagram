import DirectList from "@/components/direct/List";
import Menu from "@/containers/common/menu/Menu";
import Chat from "@/components/direct/Chat";

function DirectPage() {
	return (
		<div className="w-full h-full flex">
			<Menu />
			<DirectList />
			<Chat />
		</div>
	);
}

export default DirectPage;
