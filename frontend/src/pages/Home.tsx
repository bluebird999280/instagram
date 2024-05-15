import { useEffect, useState, useRef } from "react";
import { useAppSelector } from "@/utils/hooks";
import { useGetFeedListQuery } from "@/slices/feedApi";
import { useNavigate } from "react-router-dom";
import Menu from "@/containers/common/menu/Menu";
import Feed from "@/components/home/Feed/Feed";
import Recommendation from "@/components/home/recommendation/Recommendation";

export interface IFeed {
	_id: string;
	author: string;
	text: string;
	images: string[];
	good: number;
	comment: {
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
	createDate: string;
}

function Home() {
	const endOfPageRef = useRef(null);
	const navigate = useNavigate();
	const [feedList, setFeedList] = useState<IFeed[]>([]);
	const [count, setCount] = useState(0);
	const isLogin = useAppSelector((state) => state.user.isLogin);
	const { data, isError } = useGetFeedListQuery({
		max: 2,
		count,
	});

	useEffect(() => {
		if (!isLogin) navigate("/");
	}, [isLogin, navigate]);

	useEffect(() => {
		if (data !== undefined && data.feeds.length !== 0) {
			setFeedList((_feedList) => [..._feedList, ...data.feeds]);
		}
	}, [data]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isError) {
					setCount((_count) => _count + 1);
				}
			},
			{
				root: null, // 뷰포트를 root로 설정
				rootMargin: "0px",
				threshold: 1.0, // 완전히 보여질 때 감지
			}
		);

		if (endOfPageRef.current) {
			observer.observe(endOfPageRef.current);
		}

		return () => {
			if (endOfPageRef.current) {
				observer.unobserve(endOfPageRef.current);
			}
		};
	}, [isError]);

	return (
		<div className="flex w-full h-dvh overflow-y-hidden">
			<Menu />

			<main className="flex-grow flex justify-center overflow-y-scroll">
				<div className="max-w-[630px] flex-col flex-grow justify-center">
					<div className="max-w-full w-[min(100vw,470px)] mt-[16px]">
						{feedList.map((feed, index: number) => (
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
				<div className="pl-[64px] mt-[36px]">
					<Recommendation />
				</div>
			</main>
		</div>
	);
}

export default Home;
