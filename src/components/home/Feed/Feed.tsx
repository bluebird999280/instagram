import React, { useState, useCallback } from "react";
import ProfileImageButton from "@/atoms/button/ProfileImageButton";
import ProfileImage from "./360035642_812561723859722_2543718457893992700_n.jpg";
import MoreIcon from "@/assets/images/icons/more.svg";
import HeartIcon from "@/assets/images/icons/heart.svg";
import HeartFilledIcon from "@/assets/images/icons/heart_fill.svg?react";
import MessageIcon from "@/assets/images/icons/message.svg";
import DirectIcon from "@/assets/images/icons/direct.svg";
import BookmarkIcon from "@/assets/images/icons/bookmark.svg";
import ImageSlideComponent from "./ImageSlide";
import axiosInstance from "@/utils/axios/index";

interface IFeedComponent {
	id: string;
	author: string;
	text: string;
	images: string[];
	commentNum: number;
	good: {
		count: number;
		pressLike: boolean;
	};
}

function Feed({ id, author, text, images, commentNum, good }: IFeedComponent) {
	const [more, setMore] = useState(false);
	const [like, setLike] = useState(good.pressLike);
	const [likeCount, setLikeCount] = useState(good.count);
	const [comment, setComment] = useState("");
	const [commentCount, setCommentCount] = useState(commentNum);

	const likeOnClick = useCallback(async () => {
		try {
			const result = await axiosInstance({
				method: "post",
				url: "/like",
				headers: {
					Authorization:
						"Bearer " + localStorage.getItem("accessToken"),
				},
				data: {
					id,
				},
			});

			setLike((_like) => !_like);
			setLikeCount(result.data.count);
		} catch (e) {
			console.log(e);
		}
	}, [id]);

	const commentOnChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setComment(e.target.value);
		},
		[]
	);

	const commentOnSubmit = useCallback(
		async (e?: React.FormEvent) => {
			e?.preventDefault();

			try {
				const result = await axiosInstance({
					method: "post",
					url: "/post/comment",
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("accessToken"),
					},
					data: {
						type: "post",
						id,
						comment,
					},
				});
				setComment("");
				setCommentCount(result.data.count);
			} catch (e) {
				alert("댓글 쓰기에 실패하였습니다.");
				console.log(e);
			}
		},
		[id, comment]
	);

	const commentOnKeyDown = useCallback(
		async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
			if (e.key === "Enter") {
				if (e.shiftKey) {
					setComment((_comment) => _comment + "\n");
				} else {
					commentOnSubmit();
				}
			}
		},
		[commentOnSubmit]
	);

	return (
		<div className="w-[min(100vw, 470px)] mb-[20px]">
			<div className="pb-[12px] flex items-center">
				<div className="mr-[12px]">
					<div className="w-[32px] h-[32px]">
						<ProfileImageButton image={ProfileImage} />
					</div>
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
						<div
							className="p-[8px] cursor-pointer"
							onClick={likeOnClick}
						>
							{like ? (
								<HeartFilledIcon className="w-[24px] h-[24px] text-[rgb(255,48,64)]" />
							) : (
								<img src={HeartIcon} width={24} height={24} />
							)}
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
				좋아요 {likeCount}개
			</div>
			<div className="flex mt-[8px] leading-[14px] text-[14px]">
				<div className="font-semibold mr-[4px]">{author}</div>
				<div className="flex flex-grow">
					<div
						className={
							more
								? "h-auto overflow-x-visible overflow-y-visible text-wrap"
								: "h-[14px] overflow-x-hidden overflow-y-hidden text-ellipsis"
						}
					>
						{text}
					</div>
					{!more && (
						<div
							className="text-[rgb(115,115,115)] cursor-pointer flex-shrink-0"
							onClick={() => {
								setMore(true);
							}}
						>
							... 더 보기
						</div>
					)}
				</div>
			</div>
			{commentNum !== 0 && (
				<div className="flex mt-[8px] leading-[18px] text-[14px] text-[rgb(115,115,115)] cursor-pointer">
					<div>댓글 {commentCount}개 모두 보기</div>
				</div>
			)}
			<div className="w-full border-b border-b-[rgb(219,219,219)]">
				<form
					onSubmit={commentOnSubmit}
					className="mt-[8px] relative flex text-[14px] "
				>
					<textarea
						value={comment}
						onChange={commentOnChange}
						onKeyDown={commentOnKeyDown}
						className="flex-grow outline-none border-none h-[18px] leading-[18px] max-h-[80px] resize-none "
					/>
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
