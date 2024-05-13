import type { Meta, StoryObj } from "@storybook/react";

import Loading from "./Loading";

const meta = {
	title: "common/Loading",
	component: Loading,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	},
	args: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLoading: Story = {
	args: {},
};
