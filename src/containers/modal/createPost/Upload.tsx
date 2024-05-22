import Upload from "@/components/modal/createPost/Upload";

interface IUploadContainer {
	content: string;
	imageFileList?: FileList;
}

function UploadContainer({ content, imageFileList }: IUploadContainer) {
	return <Upload isLoading={true} />;
}

export default UploadContainer;
