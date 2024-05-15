import { useUploadQuery } from "@/slices/feedApi";
import Upload from "@/components/modal/createPost/Upload";

interface IUploadContainer {
	content: string;
	imageFileList?: FileList;
}

function UploadContainer({ content, imageFileList }: IUploadContainer) {
	const { isLoading } = useUploadQuery({
		content,
		imageFileList,
	});

	return <Upload isLoading={isLoading} />;
}

export default UploadContainer;
