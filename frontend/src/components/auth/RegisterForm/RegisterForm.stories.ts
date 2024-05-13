import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

const meta = {
	title: "auth/RegisterForm",
	component: RegisterForm,
	tags: ["autodocs"],
	parameters: {},
	args: {},
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
	args: {
		phoneOrEmail: "",
		name: "",
		nickName: "",
		password: "",
		phoneOrEmailOnChange: () => {},
		nameOnChange: () => {},
		nickNameOnChange: () => {},
		passwordOnChange: () => {},
		checkNickNameIsPossible: () => true,
	},
};
