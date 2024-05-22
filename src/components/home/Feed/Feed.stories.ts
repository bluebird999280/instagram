import type { Meta, StoryObj } from "@storybook/react";
import SlideImage1 from "@/assets/images/imageSlider/screenshot1.png";
import SlideImage2 from "@/assets/images/imageSlider/screenshot2.png";
import SlideImage3 from "@/assets/images/imageSlider/screenshot3.png";
import SlideImage4 from "@/assets/images/imageSlider/screenshot4.png";
import Feed from "./Feed";

const meta = {
	title: "home/Feed",
	component: Feed,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof Feed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFeed: Story = {
	args: {
		author: "jangdonggun99",
		text: `오늘 아침에 찍은 사진인데 다들 맘에 들었으면 좋겠어요!
			아차산에서 하루를 맞이하니깐 너무 상쾌하네요.
			다들 한번 등산해보는거 어때요? 삶이 쾌적해지고 맑은 공기 마시며
			하루를 마치니깐 너무 행복하네요!
		`,
		images: [SlideImage1, SlideImage2, SlideImage3, SlideImage4],
		good: 100,
	},
};
