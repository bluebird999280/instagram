import { useCallback, useMemo, useState, useEffect } from "react";
import RegisterFormComponent from "@/components/auth/RegisterForm/RegisterForm";
import { useSignUpQuery } from "@/slices/userApi";
import { useNavigate } from "react-router-dom";

type inputsType = {
	[key: string]: string;
};

interface IRegisterContainer {
	loginButtonOnClick: () => void;
}

function RegisterContainer({ loginButtonOnClick }: IRegisterContainer) {
	const [skip, setSkip] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [inputs, setInputs] = useState<inputsType>({
		phoneOrEmail: "",
		nickName: "",
		fullName: "",
		password: "",
	});

	const navigate = useNavigate();

	const checkNickNameIsPossible = useCallback((nickName: string) => {
		return nickName.length > 5;
	}, []);

	const rules = useMemo(() => {
		const phoneRegExp = /01[0-9]{9}/;
		const emailRegExp = /[^@]+@.+/;
		const { phoneOrEmail, fullName, nickName, password } = inputs;

		const validPhoneOrEmail =
			phoneRegExp.test(phoneOrEmail) || emailRegExp.test(phoneOrEmail);
		const validFullName = fullName.length > 0;
		const validNickName = checkNickNameIsPossible(nickName);
		const validPassword = password.length > 5;

		return {
			phoneOrEmail: validPhoneOrEmail,
			fullName: validFullName,
			nickName: validNickName,
			password: validPassword,
			all:
				validPhoneOrEmail &&
				validFullName &&
				validNickName &&
				validPassword,
		};
	}, [inputs, checkNickNameIsPossible]);

	const { data, error } = useSignUpQuery(inputs, { skip });

	useEffect(() => {
		setSkip(true);
	}, [data, error]);

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
					setErrorMessage("모든 정보가 입력되지 않았습니다.");
				if (error.message === "Phone or Email already exits")
					setErrorMessage("휴대폰이나 이메일이 이미 존재합니다.");
				if (error.message === "There is not phone or email")
					setErrorMessage("휴대폰이나 이메일을 입력해주세요.");
			} else {
				setErrorMessage("");
			}
		}
	}, [error, skip, data, navigate]);

	const inputOnChange = useCallback(
		(key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputs({ ...inputs, [key]: e.currentTarget.value });
		},
		[inputs]
	);

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (rules.all) {
				setSkip(false);
			}
		},
		[rules]
	);

	return (
		<RegisterFormComponent
			rules={rules}
			inputs={inputs}
			onSubmit={onSubmit}
			errorMessage={errorMessage}
			inputOnChange={inputOnChange}
			loginButtonOnClick={loginButtonOnClick}
		/>
	);
}

export default RegisterContainer;
