import type { Meta, StoryObj } from "@storybook/react";

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
	args: {},
};
