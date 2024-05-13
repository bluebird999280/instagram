import DownIcon from "@/assets/images/icons/down.svg?react";
import WriteIcon from "@/assets/images/icons/write.svg?react";
import ProfileImage from "./360035642_812561723859722_2543718457893992700_n.jpg";

function List() {
	return (
		<div className="bg-[white] max-w-[398px] min-h-full flex flex-col">
			<div className="w-full h-[75px] min-h-[75px] pt-[36px] px-[24px] pb-[12px] flex items-center justify-between">
				<div className="flex items-center cursor-pointer">
					<span className="h-[30px] whitespace-nowrap text-ellipsis leading-[25px] font-bold text-[20px]">
						psycoma99
					</span>
					<span className="ml-[8px]">
						<DownIcon />
					</span>
				</div>
				<div className="pl-[12px] cursor-pointer">
					<span className="p-[8px]">
						<WriteIcon />
					</span>
				</div>
			</div>
			<div className="pt-[14px] pb-[10px] px-[24px] flex items-center">
				<span className="flex-grow leading-[20px] text-[16px] font-bold break-words whitespace-pre-line">
					메시지
				</span>
				<span className="leading-[18px] text-[14px] font-semibold whitespace-pre-line text-[rgb(0,149,246)]">
					Request (1)
				</span>
			</div>
			<div className="flex flex-col flex-auto overflow-y-scroll">
				<div className="py-[8px] px-[24px] bg-[rgb(239,239,239)]">
					<div className="w-[350px] flex">
						<div className="pr-[12px]">
							<span className="w-[56px] h-[56px] rounded-[50%]">
								<img
									src={ProfileImage}
									className="w-[56px] h-[56px] rounded-[50%]"
								/>
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<div className="w-[244px] mb-[8px] text-[14px] leading-[18px] break-words whitespace-pre-line ">
								사용자이름
							</div>
							<div className="h-[18px] leading-[16px] text-[rgb(115,115,115)] text-[12px] break-words whitespace-pre-line">
								<span>단축된 메세지</span>
								<span className="mx-[4px]">·</span>
								<span>기간</span>
							</div>
						</div>
					</div>
				</div>
				<div className="py-[8px] px-[24px] ">
					<div className="w-[350px] flex">
						<div className="pr-[12px]">
							<span className="w-[56px] h-[56px] rounded-[50%]">
								<img
									src={ProfileImage}
									className="w-[56px] h-[56px] rounded-[50%]"
								/>
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<div className="w-[244px] mb-[8px] text-[14px] leading-[18px] break-words whitespace-pre-line ">
								사용자이름
							</div>
							<div className="h-[18px] leading-[16px] text-[rgb(115,115,115)] text-[12px] break-words whitespace-pre-line">
								<span>단축된 메세지</span>
								<span className="mx-[4px]">·</span>
								<span>기간</span>
							</div>
						</div>
					</div>
				</div>
				<div className="py-[8px] px-[24px] ">
					<div className="w-[350px] flex">
						<div className="pr-[12px]">
							<span className="w-[56px] h-[56px] rounded-[50%]">
								<img
									src={ProfileImage}
									className="w-[56px] h-[56px] rounded-[50%]"
								/>
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<div className="w-[244px] mb-[8px] text-[14px] leading-[18px] break-words whitespace-pre-line ">
								사용자이름
							</div>
							<div className="h-[18px] leading-[16px] text-[rgb(115,115,115)] text-[12px] break-words whitespace-pre-line">
								<span>단축된 메세지</span>
								<span className="mx-[4px]">·</span>
								<span>기간</span>
							</div>
						</div>
					</div>
				</div>
				<div className="py-[8px] px-[24px] ">
					<div className="w-[350px] flex">
						<div className="pr-[12px]">
							<span className="w-[56px] h-[56px] rounded-[50%]">
								<img
									src={ProfileImage}
									className="w-[56px] h-[56px] rounded-[50%]"
								/>
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<div className="w-[244px] mb-[8px] text-[14px] leading-[18px] break-words whitespace-pre-line ">
								사용자이름
							</div>
							<div className="h-[18px] leading-[16px] text-[rgb(115,115,115)] text-[12px] break-words whitespace-pre-line">
								<span>단축된 메세지</span>
								<span className="mx-[4px]">·</span>
								<span>기간</span>
							</div>
						</div>
					</div>
				</div>

				<div className="py-[8px] px-[24px] ">
					<div className="w-[350px] flex">
						<div className="pr-[12px]">
							<span className="w-[56px] h-[56px] rounded-[50%]">
								<img
									src={ProfileImage}
									className="w-[56px] h-[56px] rounded-[50%]"
								/>
							</span>
						</div>
						<div className="flex flex-col justify-center">
							<div className="w-[244px] mb-[8px] text-[14px] leading-[18px] break-words whitespace-pre-line ">
								사용자이름
							</div>
							<div className="h-[18px] leading-[16px] text-[rgb(115,115,115)] text-[12px] break-words whitespace-pre-line">
								<span>단축된 메세지</span>
								<span className="mx-[4px]">·</span>
								<span>기간</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default List;
