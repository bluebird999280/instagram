import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@/utils/hooks";
import { setModal } from "@/slices/view";
import Modal from "@/components/modal/Modal";
import CreatePost from "@/containers/modal/createPost/CreatePost";

function ModalContainer() {
	const dispatch = useAppDispatch();
	const modal = useAppSelector((state) => state.view.modal);

	const exitModal = useCallback(() => {
		dispatch(setModal(null));
	}, [dispatch]);

	if (modal !== null)
		return (
			<Modal exitModal={exitModal}>
				{modal === "createPost" && <CreatePost />}
			</Modal>
		);
	return null;
}

export default ModalContainer;
