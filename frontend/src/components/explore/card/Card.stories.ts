import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta = {
	title: "explore/Card",
	component: Card,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
	args: {},
};
