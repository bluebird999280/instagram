import { useCallback, useRef, useState } from "react";

interface IImageSlideComponent {
	width: string;
	height: string;
	images: string[];
}

function ImageSlideComponent({ width, height, images }: IImageSlideComponent) {
	const lastSlide = images.length;
	const sliderRef = useRef<HTMLDivElement>(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const SlidePrevOnClick = useCallback(() => {
		if (currentSlide > 0 && sliderRef.current !== null) {
			const translateX =
				sliderRef.current.clientWidth * (currentSlide - 1);
			sliderRef.current.style.transform = `translateX(-${translateX}px)`;
			setCurrentSlide(currentSlide - 1);
		}
	}, [currentSlide]);

	const SlideNextOnClick = useCallback(() => {
		if (currentSlide < lastSlide - 1 && sliderRef.current !== null) {
			const translateX =
				sliderRef.current.clientWidth * (currentSlide + 1);
			sliderRef.current.style.transform = `translateX(-${translateX}px)`;
			setCurrentSlide(currentSlide + 1);
		}
	}, [currentSlide, lastSlide]);

	return (
		<div
			style={{ width, height }}
			className="overflow-x-hidden overflow-y-hidden relative"
		>
			{currentSlide !== 0 && (
				<button
					className="absolute left-0 top-0 z-10 h-full "
					onClick={SlidePrevOnClick}
				>
					<div className="my-[16px] mx-[8px] bg-[url('/src/assets/images/TJztmXpWTmS.png')] bg-[-130px_-98px] w-[30px] h-[30px] " />
				</button>
			)}
			<div
				className="flex w-full h-full items-start transition-transform duration-500 "
				ref={sliderRef}
			>
				{images.map((image: string) => (
					<div className="w-full h-full flex-shrink-0 overflow-hidden">
						<img
							src={image}
							className="object-cover w-full h-full"
						/>
					</div>
				))}
			</div>
			{currentSlide !== lastSlide - 1 && (
				<button
					className="absolute right-0 top-0 z-10 h-full"
					onClick={SlideNextOnClick}
				>
					<div className="my-[16px] mx-[8px] bg-[url('/src/assets/images/TJztmXpWTmS.png')] bg-[-162px_-98px] w-[30px] h-[30px]" />
				</button>
			)}
			<div className="absolute left-0 right-0 bottom-[15px] flex justify-center">
				<div
					className={
						"bg-[#fff] mr-[4px] rounded-[50%] h-[6px] w-[6px] transition-opacity " +
						(currentSlide == 0 ? "opacity-100" : "opacity-40")
					}
				/>
				<div
					className={
						"bg-[#fff] mr-[4px] rounded-[50%] h-[6px] w-[6px] transition-opacity " +
						(currentSlide == 1 ? "opacity-100" : "opacity-40")
					}
				/>
				<div
					className={
						"bg-[#fff] mr-[4px] rounded-[50%] h-[6px] w-[6px] transition-opacity " +
						(currentSlide == 2 ? "opacity-100" : "opacity-40")
					}
				/>
			</div>
			<div></div>
		</div>
	);
}

export default ImageSlideComponent;
