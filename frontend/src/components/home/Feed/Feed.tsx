import ProfileImageButton from "@/atoms/Buttons/ProfileImageButton";
import ProfileImage from "./360035642_812561723859722_2543718457893992700_n.jpg";
import MoreIcon from "@/assets/images/icons/more.svg";
import HeartIcon from "@/assets/images/icons/heart.svg";
import MessageIcon from "@/assets/images/icons/message.svg";
import DirectIcon from "@/assets/images/icons/direct.svg";
import BookmarkIcon from "@/assets/images/icons/bookmark.svg";
import ImageSlideComponent from "@/components/common/imageSlide/imageSlide";

interface IFeedComponent {
	author: string;
	text: string;
	images: string[];
	good: number;
}

function Feed({ author, text, images, good }: IFeedComponent) {
	return (
		<div>
			<div className="pb-[12px] flex items-center">
				<div className="mr-[12px]">
					<ProfileImageButton
						image={ProfileImage}
						width="32px"
						height="32px"
					/>
				</div>
				<div className="flex-grow">
					<span className="font-semibold text-[14px] leading-[18px]">
						{author}
					</span>
					<span className="font-normal text-[14px] text-[rgb(115,115,115)] mx-[4px]">
						•
					</span>
					<span className="font-normal text-[14px] text-[rgb(115,115,115)]">
						1일
					</span>
				</div>
				<div className="ml-[8px] cursor-pointer">
					<img src={MoreIcon} width={24} height={24} />
				</div>
			</div>
			<ImageSlideComponent width="468px" height="468px" images={images} />
			<div className="w-full">
				<div className="flex justify-between my-[4px] ml-[-8px]">
					<div className="flex">
						<div className="p-[8px] cursor-pointer">
							<img src={HeartIcon} width={24} height={24} />
						</div>
						<div className="p-[8px] cursor-pointer">
							<img src={MessageIcon} width={24} height={24} />
						</div>
						<div className="p-[8px] cursor-pointer">
							<img src={DirectIcon} width={24} height={24} />
						</div>
					</div>
					<div>
						<div className="p-[8px] cursor-pointer">
							<img src={BookmarkIcon} width={24} height={24} />
						</div>
					</div>
				</div>
			</div>
			<div className="leading-[18px] text-[14px] font-bold ">
				좋아요 {good}개
			</div>
			<div className="flex mt-[8px] leading-[14px] text-[14px]">
				<div className=" font-semibold mr-[4px]">ahumorcollector</div>
				<div>{text}</div>
				<div className="text-[rgb(115,115,115)] cursor-pointer">
					... 더 보기
				</div>
			</div>
			<div className="flex mt-[8px] leading-[18px] text-[14px] text-[rgb(115,115,115)] cursor-pointer">
				<div>댓글 6개 모두 보기</div>
			</div>
			<div className="w-full">
				<form className="mt-[8px] relative flex text-[14px] ">
					<textarea className="flex-grow outline-none border-none h-[18px] leading-[18px] max-h-[80px] resize-none " />
					<button type="submit">
						<span className="font-bold  text-[rgb(0,149,246)]  flex items-center">
							게시
						</span>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Feed;
