import Card from "@/components/explore/card/Card";
import Menu from "@/containers/common/menu/Menu";

function Explore() {
	return (
		<div className="flex w-full h-dvh overflow-y-hidden">
			<Menu />
			<main className="pt-[24px] px-[20px] flex-grow overflow-y-scroll">
				<div
					className={
						"flex-grow flex " +
						(0 % 2 === 0 ? "flex-row-reverse" : "flex-row")
					}
				>
					<div className="basis-1/3 flex flex-col justify-stretch">
						<div className="mr-[4px] mb-[4px] flex-grow">
							<Card />
						</div>
					</div>
					<div className="flex flex-wrap basis-2/3">
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
					</div>
				</div>

				<div
					className={
						"flex-grow flex " +
						(1 % 2 === 0 ? "flex-row-reverse" : "flex-row")
					}
				>
					<div className="basis-1/3 flex flex-col justify-stretch z-0">
						<div className="mr-[4px] mb-[4px] flex-grow">
							<Card />
						</div>
					</div>
					<div className="flex flex-wrap basis-2/3">
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
						<div className="basis-1/2 pr-[4px] pb-[4px]">
							<Card />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Explore;
