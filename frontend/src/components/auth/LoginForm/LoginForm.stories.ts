import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta = {
	title: "auth/LoginForm",
	component: LoginForm,
	tags: ["autodocs"],
	parameters: {},
	args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyLoginForm: Story = {
	args: {
		id: "",
		idOnChange: () => {},
		password: "",
		passwordOnChange: () => {},
	},
};

export const IdEnteredLoginForm: Story = {
	args: {
		id: "[ID]",
		idOnChange: () => {},
		password: "",
		passwordOnChange: () => {},
	},
};

export const PasswordEnteredLoginForm: Story = {
	args: {
		id: "",
		idOnChange: () => {},
		password: "[password]",
		passwordOnChange: () => {},
	},
};

export const AllEnteredLoginForm = {
	args: {
		id: "[ID]",
		idOnChange: () => {},
		password: "[password]",
		passwordOnChange: () => {},
	},
};
