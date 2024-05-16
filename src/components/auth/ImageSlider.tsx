interface IImageSliderComponent {
	images: string[];
	opacityIndex: number;
}

function ImageSliderComponent({ images, opacityIndex }: IImageSliderComponent) {
	return (
		<div className="relative flex-shrink-0 bg-[url('/src/assets/images/imageSlider/home-phones.png')] w-[380.32px] h-[581.15px] bg-[length:468.32px_634.15px] bg-[-46px_0px]">
			<div className="absolute w-[250px] mt-7 ml-[112px] top-0">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						className={`absolute transition-opacity ease-in-out duration-[2000ms] ${opacityIndex === index ? "opacity-100" : "opacity-0"}`}
					/>
				))}
			</div>
		</div>
	);
}

export default ImageSliderComponent;
