import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const meta = {
	title: "common/menu/Menu",
	component: MenuContainer,
	tags: ["autodocs"],
	parameters: {},
	args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

function MenuContainer() {
	const [view, setView] = useState({
		modal: "",
		menuSlide: "",
	});

	// useEffect(() => {
	// 	if (view.modal !== "") alert(view.modal);
	// 	if (view.menuSlide !== "") alert(view.menuSlide);
	// }, [view]);

	return (
		<div>
			<Menu setView={setView} />
		</div>
	);
}

export const DefaultMenu: Story = {
	args: {},
};
