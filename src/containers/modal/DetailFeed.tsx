import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import axiosInstance from "@/utils/axios/index";
import DetailFeedComponent from "@/components/modal/detailFeed/DetailFeed";
import { getFeedThunk } from "@/slices/feed/thunk";

function DetailFeedContainer() {
	const dispatch = useAppDispatch();
	const feed = useAppSelector((state) => state.feed.feed);
	const [like, setLike] = useState(feed?.good.pressLike ?? false);
	const [likeCount, setLikeCount] = useState(feed?.good.count ?? 0);
	const [comment, setComment] = useState("");

	const commentOnSubmit = useCallback(
		async (e?: React.FormEvent) => {
			e?.preventDefault();
			if (feed === null || feed === undefined) return;

			try {
				await axiosInstance({
					method: "post",
					url: "/post/comment",
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("accessToken"),
					},
					data: {
						type: "post",
						id: feed?._id,
						comment,
					},
				});
				setComment("");
				dispatch(getFeedThunk({ id: feed?._id }));
			} catch (e) {
				alert("댓글 쓰기에 실패하였습니다.");
				console.log(e);
			}
		},
		[feed, comment, dispatch]
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

	const commentOnChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) =>
			setComment(e.target.value),
		[]
	);

	if (feed === undefined) return null;
	return (
		<DetailFeedComponent
			feed={feed}
			like={like}
			comment={comment}
			commentOnKeyDown={commentOnKeyDown}
			commentOnChange={commentOnChange}
			commentOnSubmit={commentOnSubmit}
		/>
	);
}

export default DetailFeedContainer;
