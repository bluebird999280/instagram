import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
	title: "common/modal/Modal",
	component: Modal,
	tags: ["autodocs"],
	parameters: {},
	args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMenu: Story = {
	args: {},
};
