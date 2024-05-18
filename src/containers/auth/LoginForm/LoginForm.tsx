import { useCallback, useMemo, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/hooks/redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "@/slices/user/thunk";
import errorMessage from "@/utils/data/errors";
import LoginFormComponent from "@/components/auth/LoginForm/LoginForm";

function LoginFormContainer() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const error = useAppSelector((state) => state.user.error);
	const isLogin = useAppSelector((state) => state.user.isLogin);
	const [inputs, setInputs] = useState({ id: "", password: "" });

	useEffect(() => {
		if (isLogin) return navigate("/home");
	}, [isLogin, navigate]);

	const rules = useMemo(
		() => ({
			id: inputs.id.length > 0,
			password: inputs.password.length > 5,
			all: inputs.id.length > 0 && inputs.password.length > 5,
		}),
		[inputs]
	);

	const inputOnChange = useCallback(
		(key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputs({ ...inputs, [key]: e.currentTarget.value });
		},
		[inputs]
	);

	const submitOnClick = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (rules.all) dispatch(loginThunk(inputs));
		},
		[rules, dispatch, inputs]
	);

	return (
		<LoginFormComponent
			rules={rules}
			inputs={inputs}
			errorMessage={errorMessage(error)}
			inputOnChange={inputOnChange}
			submitOnClick={submitOnClick}
			registerButtonOnClick={() => {}}
		/>
	);
}

export default LoginFormContainer;
