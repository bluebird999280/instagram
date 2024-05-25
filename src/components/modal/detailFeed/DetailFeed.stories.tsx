import type { Meta, StoryObj } from "@storybook/react";
import DetailFeed from "./DetailFeed";

const meta = {
	title: "common/modal/DetailFeed",
	component: DetailFeed,
	parameters: {},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof DetailFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
