import Image from "./437376958_1651775042291282_6506021717555347221_n.jpg";
import SoundIcon from "@/assets/images/icons/sound.svg?react";
import NoSoundIcon from "@/assets/images/icons/no_sound.svg?react";
import ProfileImage from "./360035642_812561723859722_2543718457893992700_n.jpg";
import ProfileImageButton from "@/atoms/Buttons/ProfileImageButton";
import MusicIcon from "@/assets/images/icons/music.svg?react";
import PersonIcon from "@/assets/images/icons/person.svg?react";
import PlayIcon from "@/assets/images/icons/play.svg?react";
import Video from "./becane.mp4";

function Reels() {
	const isVideoClicked = true;
	return (
		<div>
			<div className="w-[464.244px] h-[827.1px] ">
				<div className="w-full h-full relative flex flex-col items-center ">
					<img
						src={Image}
						className={
							"block w-[110%] h-full transition-opacity max-w-[110%]  " +
							(isVideoClicked
								? "opacity-[.3] blur-[30px]"
								: "opacity-[1]")
						}
					/>
					<div className="w-full h-full rounded-[4px] absolute top-0 left-0 ">
						<video autoPlay className="w-full h-full bg-black">
							<source src={Video} type="video/mp4" />
						</video>
					</div>
					<div
						className="absolute top-0 left-0 bottom-0 right-0 text-[#fff] flex flex-col rounded-[4px]"
						style={{
							backgroundImage:
								"linear-gradient(0deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,0) 80%,rgba(0,0,0,.35) 100%)",
						}}
					>
						<div className="flex pt-[8px] pr-[8px] justify-end ">
							<div className="w-[32px] h-[32px] rounded-[50%] bg-[rgba(219,219,219,.2)] flex justify-center items-center cursor-pointer">
								<SoundIcon />
							</div>
						</div>
						<div className="flex-grow flex items-end p-[16px] w-full border-box">
							<div className="flex flex-col mr-[8px] flex-grow max-w-full">
								<div className="flex items-center">
									<div className="flex items-center cursor-pointer">
										<span>
											<ProfileImageButton
												image={ProfileImage}
												width="32px"
												height="32px"
											/>
										</span>
										<span className="text-[15px] font-semibold cursor-pointer">
											dbpia_insta
										</span>
									</div>
									<div>
										<span className="mx-[6px]">•</span>
										<button className="text-[14px] h-[32px] px-[6px] border border-[rgba(219,219,219,.5)] rounded-[8px]">
											팔로우
										</button>
									</div>
								</div>
								<div className="pt-[16px] h-[18px] leading-[18px] text-[14px] flex cursor-pointer box-content">
									<span>추가글</span>
									<span className="ml-[4px] text-[rgba(255,255,255,.7)]">
										{" "}
										... 더보기
									</span>
								</div>
								<div className="flex py-[12px] cursor-pointer max-w-full">
									<div className="max-w-[50%] mr-[8px] flex items-center basis-[50%] flex-shrink">
										<div className="mr-[4px]">
											<MusicIcon className="text-[white] relative top-[2px]" />
										</div>
										<div className="max-w-full flex overflow-x-hidden flex-grow ">
											<span className="whitespace-nowrap leading-[18px] text-[14px] text-[white] break-words cursor-pointer mr-[8px] w-full flex-shrink-0">
												djpeipei212 · 원본 오디오
											</span>
											<span className="whitespace-nowrap leading-[18px] text-[14px] text-[white] break-words cursor-pointer mr-[8px] w-full flex-shrink-0">
												djpeipei212 · 원본 오디오
											</span>
										</div>
									</div>
									<div className="max-w-[50%] mr-[8px] flex items-center overflow-x-hidden basis-[50%]">
										<div className="mr-[4px]">
											<PersonIcon className="w-[12px] h-[12px] relative top-[2px]" />
										</div>
										<div>
											<span className="leading-[18px] text-[14px] break-words">
												superhousenightclub
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center cursor-pointer">
						<div className="p-[16px] bg-[rgba(0,0,0,.5)] rounded-[50%]">
							<div className="p-[8px]">
								<PlayIcon className="text-[white]" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[16px] w-full flex-shrink-0" />
		</div>
	);
}

export default Reels;
