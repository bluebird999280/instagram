import { useCallback, useMemo, useState, useEffect } from "react";
import { useSignInQuery } from "@/slices/userApi";
import { useNavigate } from "react-router-dom";
import LoginFormComponent from "@/components/auth/LoginForm/LoginForm";

type rulesTypes = {
	[key: string]: boolean;
};

type inputsType = {
	[key: string]: string;
};

interface ILoginFormContainer {
	registerButtonOnClick: () => void;
}

function LoginFormContainer({ registerButtonOnClick }: ILoginFormContainer) {
	const navigate = useNavigate();
	const [skip, setSkip] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [inputs, setInputs] = useState<inputsType>({
		id: "",
		password: "",
	});

	const { data, error } = useSignInQuery(inputs, {
		skip,
	});

	useEffect(() => {
		setSkip(true);
	}, [error, data]);

	useEffect(() => {
		if (!skip) {
			if (data !== undefined) {
				localStorage.setItem("accessToken", data.accessToken);
				localStorage.setItem("refreshToken", data.refreshToken);
				return navigate("/home");
			}
			if (error !== undefined) {
				if (error.message === "unknown error")
					setErrorMessage("알 수 없는 오류입니다.");
				if (error.message === "Input value is empty")
					setErrorMessage("아이디와 패스워드를 입력해주세요.");
				if (error.message === "User does not exist")
					setErrorMessage("사용자가 존재하지 않습니다.");
				if (error.message === "Password is incorrect")
					setErrorMessage("패스워드가 올바르지 않습니다.");
			} else {
				setErrorMessage("");
			}
		}
	}, [error, skip, data]);

	const rules = useMemo<rulesTypes>(() => {
		const { id, password } = inputs;
		const validId = id.length > 0;
		const validPassword = password.length > 5;

		return {
			id: validId,
			password: validPassword,
			all: validId && validPassword,
		};
	}, [inputs]);

	const inputOnChange = useCallback(
		(key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputs({ ...inputs, [key]: e.currentTarget.value });
		},
		[inputs]
	);

	const submitOnClick = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (rules.all) setSkip(false);
		},
		[rules]
	);

	return (
		<LoginFormComponent
			rules={rules}
			inputs={inputs}
			errorMessage={errorMessage}
			inputOnChange={inputOnChange}
			submitOnClick={submitOnClick}
			registerButtonOnClick={registerButtonOnClick}
		/>
	);
}

export default LoginFormContainer;
