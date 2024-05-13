import Menu from "@/containers/common/menu/Menu";
import Feed from "@/components/home/Feed/Feed";
import Recommendation from "@/components/home/recommendation/Recommendation";

function Home() {
	return (
		<div className="flex w-full h-dvh overflow-y-hidden">
			<Menu />

			<main className="flex-grow flex justify-center overflow-y-scroll">
				<div className="max-w-[630px] flex flex-grow justify-center">
					<div className="max-w-full w-[min(100vw,470px)] mt-[16px]">
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
						<Feed />
					</div>
				</div>
				<div className="pl-[64px] mt-[36px]">
					<Recommendation />
				</div>
			</main>
		</div>
	);
}

export default Home;
