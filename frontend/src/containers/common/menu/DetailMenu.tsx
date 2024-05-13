import { useAppSelector } from "@/utils/hooks";
import DetailMenu from "@/components/common/menu/DetailMenu";

function DetailMenuContainer() {
	const { detailMenu } = useAppSelector((state) => ({
		detailMenu: state.view.detailMenu,
	}));

	return <DetailMenu isShown={detailMenu} />;
}

export default DetailMenuContainer;
