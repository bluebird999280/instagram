import Feed from "@/components/home/Feed/Feed";
import { IFeedData } from "@/utils/types/view";

interface IFeedListComponent {
	feedList: IFeedData[];
	endOfPageRef: React.RefObject<HTMLDivElement>;
}

function FeedListComponent({ feedList, endOfPageRef }: IFeedListComponent) {
	return (
		<div className="max-w-[630px] flex-col flex-grow justify-center">
			<div className="max-w-full w-[min(100vw,470px)] mt-[16px]">
				{feedList.map((feed: IFeedData, index: number) => (
					<Feed
						key={index}
						author={feed.author}
						text={feed.text}
						images={feed.images}
						good={feed.good}
					/>
				))}
			</div>
			<div className="h-[100px] " ref={endOfPageRef} />
		</div>
	);
}

export default FeedListComponent;
