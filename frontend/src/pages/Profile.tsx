import Menu from "@/containers/common/menu/Menu";

function ProfilePage() {
	return (
		<div className="flex w-full h-full overflow-y-hidden">
			<Menu />

			<main className="h-full pt-[30px] px-[20px] mx-auto max-w-[935px] w-[calc(100%-40px)]">
				<div className="">
					<div>프로필 이미지</div>
					<div>
						<div>
							<div></div>
						</div>
						<div></div>
						<div></div>
					</div>
				</div>
			</main>
		</div>
	);
}
export default ProfilePage;
