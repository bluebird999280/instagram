import { useEffect, useState } from "react";
import ImageSliderComponent from "@/components/auth/ImageSlider";
import SliderImage1 from "@/assets/images/imageSlider/screenshot1.png";
import SliderImage2 from "@/assets/images/imageSlider/screenshot2.png";
import SliderImage3 from "@/assets/images/imageSlider/screenshot3.png";
import SliderImage4 from "@/assets/images/imageSlider/screenshot4.png";

const images = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

function ImageSlider() {
	const [fadeInIndex, setFadeInIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setFadeInIndex(
				(_fadeInIndex) => (_fadeInIndex + 1) % images.length
			);
		}, 3000);
	}, []);

	return <ImageSliderComponent images={images} opacityIndex={fadeInIndex} />;
}

export default ImageSlider;
