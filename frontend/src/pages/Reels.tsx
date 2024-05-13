import Menu from "@/containers/common/menu/Menu";
import Reels from "@/components/reels/Reels";

function ReelsPage() {
	return (
		<div className="flex w-full h-dvh">
			<Menu />
			<main
				className="h-dvh overflow-y-scroll flex flex-grow flex-col items-center pt-[32px] bg-white flex-shrink-0 scrollbar-hide scroll-smooth"
				onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
					if (e.deltaY < 0) {
						e.currentTarget.scrollTo(
							0,
							Math.round(e.currentTarget.scrollTop / 843) * 843 -
								843
						);
					} else {
						e.currentTarget.scrollTo(
							0,
							Math.round(e.currentTarget.scrollTop / 843) * 843 +
								843
						);
					}
				}}
				onScroll={(e) => {
					e.preventDefault();
				}}
			>
				<Reels />

				<Reels />
				<Reels />
				<Reels />
				<Reels />
			</main>
		</div>
	);
}

export default ReelsPage;
