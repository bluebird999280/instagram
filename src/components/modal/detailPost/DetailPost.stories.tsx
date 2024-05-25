import type { Meta, StoryObj } from "@storybook/react";
import DetailPost from "./DetailPost";

const meta = {
	title: "common/modal/DetailPost",
	component: DetailPost,
	parameters: {},
	tags: ["autodocs"],
	args: {},
} satisfies Meta<typeof DetailPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
