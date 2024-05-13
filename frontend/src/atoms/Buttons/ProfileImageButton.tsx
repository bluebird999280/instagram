interface IProfileImageButton {
	image: string;
	width: string;
	height: string;
}

function ProfileImageButton({ image, width, height }: IProfileImageButton) {
	return (
		<div
			className={
				`rounded-[50%] overflow-hidden mr-[12px] ` +
				`w-[${width}] h-[${height}]`
			}
		>
			<img
				src={image}
				className={`w-[${width}] h-[${height}]`}
				object-fit="cover"
			/>
		</div>
	);
}

export default ProfileImageButton;
