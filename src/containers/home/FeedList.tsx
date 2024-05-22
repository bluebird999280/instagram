import { useEffect, useState, useRef } from "react";
import FeedListComponent from "@/components/home/FeedList/FeedList";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { getFeedListThunk } from "@/slices/view/thunk";

function FeedListContainer() {
	const endOfPageRef = useRef<HTMLDivElement>(null);
	const [count, setCount] = useState(0);
	const dispatch = useAppDispatch();
	const error = useAppSelector((state) => state.view.error);
	const feedList = useAppSelector((state) => state.view.feedList);

	useEffect(() => {
		const element = endOfPageRef.current;
		const config = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !error) {
				dispatch(getFeedListThunk({ max: 2, count }));
				setCount((_count) => _count + 1);
			}
		}, config);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [dispatch, count, error]);

	return (
		<FeedListComponent feedList={feedList} endOfPageRef={endOfPageRef} />
	);
}

export default FeedListContainer;
