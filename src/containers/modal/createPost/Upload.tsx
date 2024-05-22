import { useEffect } from "react";
import { useAppDispatch } from "@/utils/hooks/redux";
import Upload from "@/components/modal/createPost/Upload";
import { uploadFeedThunk } from "@/slices/view/thunk";

interface IUploadContainer {
	content: string;
	imageFileList?: FileList;
}

function UploadContainer({ content, imageFileList }: IUploadContainer) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(uploadFeedThunk({ caption: content, files: imageFileList }));
	}, [dispatch, content, imageFileList]);

	return <Upload isLoading={true} />;
}

export default UploadContainer;
