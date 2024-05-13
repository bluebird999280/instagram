import { useMemo, useState, useCallback } from "react";
import Layout from "@/components/modal/createPost/Layout";
import SelectImage from "@/containers/modal/createPost/SelectImage";
import EnterContent from "@/containers/modal/createPost/EnterContent";

function CreatePost() {
	const [content, setContent] = useState("");
	const [imageFileList, setImageFileList] = useState<FileList>();
	const [modalIndex, setModalIndex] = useState(0);

	const selectImageNextOnClick = useCallback(() => {
		setModalIndex(1);
	}, []);

	const EnterContentPrevOnClick = useCallback(() => {
		setModalIndex(0);
	}, []);

	const EnterContentNextOnClick = useCallback(async () => {
		const sendData = new FormData();

		if (imageFileList !== undefined) {
			sendData.append("text", content);
			for (let i = 0; i < imageFileList.length; i++) {
				sendData.append("images", imageFileList[i]);
				console.log(i);
			}
		}

		try {
			await fetch("http://localhost:4000/api/feed/upload", {
				method: "POST",
				cache: "no-cache",
				body: sendData,
				headers: {
					Authentication:
						"Bearer " + localStorage.getItem("accessToken"),
				},
			});
		} catch (e) {
			console.log(e);
		}
	}, [imageFileList, content]);

	const layouts = useMemo(
		() => [
			<Layout
				width="700px"
				height="743px"
				first
				title="이미지 선택하기"
				body={
					<SelectImage
						setImageFileList={setImageFileList}
						moveNext={selectImageNextOnClick}
					/>
				}
			/>,
			<Layout
				width={"1040px"}
				height={"743px"}
				next="완료하기"
				title="문구 입력하기"
				body={
					<EnterContent
						imageFileList={imageFileList}
						content={content}
						setContent={setContent}
					/>
				}
				prevOnClick={EnterContentPrevOnClick}
				nextOnClick={EnterContentNextOnClick}
			/>,
		],
		[
			setImageFileList,
			imageFileList,
			content,
			setContent,
			selectImageNextOnClick,
			EnterContentPrevOnClick,
			EnterContentNextOnClick,
		]
	);

	return layouts[modalIndex];
}

export default CreatePost;
