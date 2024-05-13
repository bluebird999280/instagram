import type { Meta, StoryObj } from "@storybook/react";

import Recommendation from "./Recommendation";

const meta = {
	title: "home/Recommendation",
	component: Recommendation,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof Recommendation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRecommendation: Story = {
	args: {},
};
