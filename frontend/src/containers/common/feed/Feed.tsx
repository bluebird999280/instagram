import FeedComponent from "@/components/home/Feed/Feed";

interface IFeedContainer {
	author: string;
	text: string;
	images: string[];
	good: number;
	comment?: {
		author: string;
		comment: {
			author: string;
			body: string;
			date: string;
			comment: {
				author: string;
				body: string;
				date: string;
			} | null;
		} | null;
	}[];
	createDate?: string;
}

function FeedContainer({
	author,
	text,
	images,
	good,
	comment,
	createDate,
}: IFeedContainer) {
	return (
		<FeedComponent
			author={author}
			text={text}
			images={images}
			good={good}
		/>
	);
}

export default FeedContainer;
