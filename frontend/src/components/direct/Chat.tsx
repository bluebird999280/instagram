import ProfileImage from "./360035642_812561723859722_2543718457893992700_n.jpg";
import PhoneIcon from "@/assets/images/icons/phone.svg?react";
import VideoCallIcon from "@/assets/images/icons/video_call.svg?react";
import InformationIcon from "@/assets/images/icons/information.svg?react";
import IconIcon from "@/assets/images/icons/icon.svg?react";
import ReplyIcon from "@/assets/images/icons/reply.svg?react";
import SmallMenuIcon from "@/assets/images/icons/small_menu.svg?react";
import MicIcon from "@/assets/images/icons/mic.svg?react";
import AlbumIcon from "@/assets/images/icons/album.svg?react";
import HeartIcon from "@/assets/images/icons/heart.svg?react";

function Chat() {
	return (
		<div className="flex flex-col flex-grow bg-white text-[15px]">
			<div className="flex flex-col flex-grow">
				<div className="flex items-center px-[16px] h-[75px] border-b border-b-[rgb(219,219,219)]">
					<div className="flex flex-grow items-center">
						<div className="w-[44px] h-[44px] m-[6px] rounded-[50%] flex ">
							<img
								src={ProfileImage}
								className="w-[44px] h-[44px] rounded-[50%] flex-shrink-none"
							/>
						</div>
						<div className="p-[6px] leading-[20px] text-[16px]  font-semibold whitespace-pre-line break-words">
							이름
						</div>
					</div>
					<div className="flex">
						<span className="p-[8px] cursor-pointer">
							<PhoneIcon className="w-[24px] h-[24px]" />
						</span>
						<span className="p-[8px] cursor-pointer">
							<VideoCallIcon className="w-[24px] h-[24px]" />
						</span>
						<span className="p-[8px] cursor-pointer">
							<InformationIcon className="w-[24px] h-[24px]" />
						</span>
					</div>
				</div>
				<div className="overflow-y-scroll flex-grow">
					<div className="text-[15px] flex-col">
						<div className="flex flex-col items-center mt-[20px]">
							<div className="w-[96px] h-[96px] rounded-[50%] overflow-hidden my-[16px]">
								<img
									src={ProfileImage}
									width={96}
									height={96}
								/>
							</div>
							<div className="mt-[24px] mb-[32px]">
								<button className="h-[32px] px-[16px] font-semibold rounded-[8px] text-[14px] leading-[14px] bg-[rgb(239,239,239)]">
									프로필 보기
								</button>
							</div>
						</div>
					</div>
					<div>
						<div className="py-[16px] px-[20px] flex">
							<span className="max-w-[457px] mx-auto my-[2px] leading-[1.3333] font-normal break-words text-[12px] text-[#65676B]">
								4/18/23, 5:29 오후
							</span>
						</div>
						<div className="flex">
							<span className="flex flex-shrink-0 ml-[14px] mr-[8px] w-[28px] h-[28px] rounded-[50%] overflow-hidden ">
								<img
									src={ProfileImage}
									width={28}
									height={28}
								/>
							</span>
							<span className="max-w-[564px] rounded-[18px] py-[7px] px-[12px] bg-[rgb(239,239,239)] break-words text-black leading-[1.3333]">
								안녕하세요. 추천친구로 떠서 팔로우 보냈어요~
							</span>
							<div className="w-[96px] pl-[5px] flex items-center">
								<div className="cursor-pointer rounded-[50%] hover:bg-[rgba(0,0,0,.10)]">
									<IconIcon
										className="p-[4px] box-content"
										width={16}
										height={16}
									/>
								</div>
								<div className="cursor-pointer rounded-[50%] hover:bg-[rgba(0,0,0,.10)]">
									<ReplyIcon
										className="p-[4px] box-content"
										width={16}
										height={16}
									/>
								</div>
								<div className="cursor-pointer rounded-[50%] hover:bg-[rgba(0,0,0,.10)]">
									<SmallMenuIcon
										className="p-[4px] box-content"
										width={16}
										height={16}
									/>
								</div>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
						<div className="flex mt-[10px] pl-[22px] justify-end">
							<div className=" max-w-[564px] bg-[rgb(55,151,240)] p-[7px_12px] rounded-br-[4px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-[18px]">
								<span className="text-white break-words whitespace-pre-wrap">
									안녕하세요. 저도 반가워요
								</span>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="m-[16px] border-[rgb(219,219,219)] border rounded-[22px]">
						<div className="flex flex-row items-center min-h-[44px] pl-[11px] pr-[16px]">
							<div>
								<span className="flex p-[4px] box-content cursor-pointer">
									<IconIcon width={24} height={24} />
								</span>
							</div>
							<div className="flex-grow ml-[8px] mr-[4px]">
								<p className="w-full min-h-[12px] max-h-[124px] overflow-y-scroll whitespace-pre-wrap break-words">
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
									<br />
									안녕하세요
								</p>
							</div>
							<div className="flex items-center">
								<span className="box-content p-[8px] cursor-pointer">
									<MicIcon width={24} height={24} />
								</span>
								<span className="box-content p-[8px] cursor-pointer">
									<AlbumIcon />
								</span>
								<span className="box-content p-[8px] cursor-pointer">
									<HeartIcon />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;
