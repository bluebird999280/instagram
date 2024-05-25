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
	const [like, setLike] = useState(feed.good.pressLike);
	const [likeCount, setLikeCount] = useState(feed.good.count);
	const [comment, setComment] = useState("");
	const [commentCount, setCommentCount] = useState(feed.comment.length);

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
					id: feed._id,
				},
			});

			setLike((_like) => !_like);
			setLikeCount(result.data.count);
		} catch (e) {
			console.log(e);
		}
	}, [feed]);

	const commentOnClick = useCallback(() => {
		dispatch(getFeedThunk({ id: feed._id }));
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
				const result = await axiosInstance({
					method: "post",
					url: "/post/comment",
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("accessToken"),
					},
					data: {
						type: "post",
						id: feed._id,
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
			like={like}
			likeCount={likeCount}
			comment={comment}
			commentCount={commentCount}
			likeOnClick={likeOnClick}
			commentOnClick={commentOnClick}
			commentOnChange={commentOnChange}
			commentOnSubmit={commentOnSubmit}
			commentOnKeyDown={commentOnKeyDown}
		/>
	);
}

export default FeedContainer;
