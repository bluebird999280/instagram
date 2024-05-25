import { useCallback, useState } from "react";
import DetailFeedComponent from "@/components/modal/detailFeed/DetailFeed";
import { useAppSelector } from "@/utils/hooks/redux";

function DetailFeedContainer() {
	const feed = useAppSelector((state) => state.feed.feed);
	const [like, setLike] = useState(feed?.good.pressLike ?? false);
	const [likeCount, setLikeCount] = useState(feed);
	const [comment, setComment] = useState("");

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
			commentOnChange={commentOnChange}
		/>
	);
}

export default DetailFeedContainer;
