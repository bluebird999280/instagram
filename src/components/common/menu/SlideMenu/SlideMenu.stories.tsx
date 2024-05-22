import type { Meta, StoryObj } from "@storybook/react";
import SlideMenuComponent from "./SlideMenu";

const meta = {
	title: "Example/SlideMenu",
	component: SlideMenuComponent,
	tags: ["autodocs"],
} satisfies Meta<typeof SlideMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationStory: Story = {
	args: {
		show: true,
		slide: "notification",
	},
	render: function Render(args) {
		return (
			<div className="w-dvw h-dvh">
				<SlideMenuComponent show={args.show} slide="notification" />
			</div>
		);
	},
};

export const SearchStory: Story = {
	args: {
		show: true,
		slide: "search",
	},
	render: function Render(args) {
		return (
			<div className="w-dvw h-dvh">
				<SlideMenuComponent show={args.show} slide="notification" />
			</div>
		);
	},
};
