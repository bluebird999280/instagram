import { useState, useCallback } from "react";
import { useAppDispatch } from "@/utils/hooks/redux";
import { setModal } from "@/slices/view/slice";
import axiosInstance from "@/utils/axios/index";
import type { IFeedData } from "@/utils/types/feed";
import FeedComponent from "@/components/home/Feed/Feed";
import { getFeedThunk } from "@/slices/feed/thunk";

interface IFeedContainer {
	feed: IFeedData;
}

function FeedContainer({ feed }: IFeedContainer) {
	const dispatch = useAppDispatch();
	const [likeCount, setLikeCount] = useState(feed.likeCount);
	const [pressLike, setPressLike] = useState(feed.pressLike);
	const [comment, setComment] = useState("");

	const likeOnClick = useCallback(async () => {
		try {
			await axiosInstance({
				method: "get",
				url: "/post/like",
				headers: {
					Authorization:
						"Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					id: feed.id,
				},
			});
			setLikeCount((_likeCount) =>
				pressLike ? _likeCount - 1 : _likeCount + 1
			);
			setPressLike((_pressLike) => !_pressLike);
		} catch (e) {
			console.log(e);
		}
	}, [feed, pressLike]);

	const commentOnClick = useCallback(() => {
		dispatch(getFeedThunk({ id: feed.id }));
		dispatch(setModal("showDetailFeed"));
	}, [dispatch, feed]);

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
				await axiosInstance({
					method: "post",
					url: "/post/comment",
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("accessToken"),
					},
					data: {
						id: feed.id,
						comment,
					},
				});
			} catch (e) {
				alert("댓글 쓰기에 실패하였습니다.");
				console.log(e);
			}
		},
		[feed, comment]
	);

	const commentOnKeyDown = useCallback(
		async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
			if (e.key === "Enter") {
				if (!e.shiftKey) {
					commentOnSubmit();
				}
			}
		},
		[commentOnSubmit]
	);

	return (
		<FeedComponent
			feed={feed}
			comment={comment}
			likeCount={likeCount}
			pressLike={pressLike}
			likeOnClick={likeOnClick}
			commentOnClick={commentOnClick}
			commentOnChange={commentOnChange}
			commentOnSubmit={commentOnSubmit}
			commentOnKeyDown={commentOnKeyDown}
		/>
	);
}

export default FeedContainer;
