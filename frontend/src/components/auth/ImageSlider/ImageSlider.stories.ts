import type { Meta, StoryObj } from "@storybook/react";

import ImageSlider from "./ImageSlider";

const meta = {
	title: "auth/ImageSlider",
	component: ImageSlider,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof ImageSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultImageSlider: Story = {
	args: {},
};
