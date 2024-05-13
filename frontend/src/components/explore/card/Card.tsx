import CardBackgroundImage from "./440511646_735121222112897_7364278021060867331_n.jpg";
import SlidesSvg from "@/assets/images/icons/slides.svg?react";
import RealsSvg from "@/assets/images/icons/reels.svg?react";

function Card() {
	return (
		<div className="w-full h-full flex-grow flex-shrink-none overflow-hidden relative">
			<div className="w-full h-full">
				<img
					src={CardBackgroundImage}
					object-fit="cover"
					className="w-full h-full"
				/>
			</div>
			<div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.3)] flex justify-center items-center cursor-pointer">
				<div>
					<div className="leading-[20px] text-[16px] text-[#fff] font-bold whitespace-pre-line break-words mr-[30px] flex">
						<div className="bg-[url('/src/assets/images/TJztmXpWTmS.png')] bg-[-340px_-333px] w-[19px] h-[19px]  mr-[7px]" />
						<span>1170</span>
					</div>
				</div>
				<div>
					<div className="leading-[20px] text-[16px] text-[#fff] font-bold whitespace-pre-line break-words flex">
						<div className="bg-[url('/src/assets/images/TJztmXpWTmS.png')] bg-[-382px_-333px] w-[19px] h-[19px]  mr-[7px]" />
						<span>70</span>
					</div>
				</div>
			</div>
			<div>
				<div className="absolute top-0 left-0 right-0 bottom-0 mt-[15px] mr-[15px] flex justify-end cursor-pointer">
					<SlidesSvg
						style={{
							filter: "drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2))",
						}}
						className="text-[#fff] "
					/>
					{/* <RealsSvg
						style={{
							filter: "drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2))",
						}}
						className="text-[#fff] "
					/> */}
				</div>
			</div>
		</div>
	);
}

export default Card;
