import type { Meta, StoryObj } from "@storybook/react";

import List from "./List";

const meta = {
	title: "direct/List",
	component: List,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultImageSlider: Story = {
	args: {},
};
