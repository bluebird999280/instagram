import type { Meta, StoryObj } from "@storybook/react";

import Reels from "./Reels";

const meta = {
	title: "reels/Reels",
	component: Reels,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof Reels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultReels: Story = {
	args: {},
};
