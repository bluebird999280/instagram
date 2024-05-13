import { useEffect, useState, useCallback } from "react";
import SliderImage1 from "@/assets/images/imageSlider/screenshot1.png";
import SliderImage2 from "@/assets/images/imageSlider/screenshot2.png";
import SliderImage3 from "@/assets/images/imageSlider/screenshot3.png";
import SliderImage4 from "@/assets/images/imageSlider/screenshot4.png";

const SliderImages = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

function ImageSlider() {
	const [opacities, setOpacities] = useState([true, false, false, false]);

	const slideImageByOpacity = useCallback(() => {
		const temp: boolean[] = [false, false, false, false];
		const index = opacities.findIndex((opacity) => opacity);

		temp[(index + 1) % temp.length] = true;
		setOpacities(temp);
	}, [opacities]);

	useEffect(() => {
		setTimeout(slideImageByOpacity, 3000);
	}, [slideImageByOpacity]);

	return (
		<div className="relative bg-[url('/src/assets/images/imageSlider/home-phones.png')] w-[380.32px] h-[581.15px] bg-[length:468.32px_634.15px] bg-[-46px_0px]">
			<div className="absolute w-[250px] mt-7 ml-[112px] top-0">
				{SliderImages.map((sliderImage, index) => (
					<img
						key={index}
						src={sliderImage}
						className={`absolute transition-opacity ease-in-out duration-[2000ms] ${opacities[index] ? "opacity-100" : "opacity-0"}`}
					/>
				))}
			</div>
		</div>
	);
}

export default ImageSlider;
