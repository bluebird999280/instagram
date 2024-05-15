import { useCallback, useState, useEffect } from "react";
import { useCheckQuery } from "@/slices/userApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/utils/hooks";
import { setIsLogin } from "@/slices/user";
import Footer from "@/components/auth/Footer/Footer";
import ImageSlider from "@/components/auth/ImageSlider/ImageSlider";
import LoginFormContainer from "@/containers/auth/LoginForm/LoginForm";
import RegisterFormContainer from "@/containers/auth/RegisterForm/RegisterForm";
import LoadingComponent from "@/components/auth/Loading/Loading";

function Auth() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [LoginOrRegister, setLoginOrRegister] = useState("login");
	const { data, isLoading } = useCheckQuery(undefined);

	const LoginOrRegisterOnClick = useCallback(
		(type: string) => () => {
			setLoginOrRegister(type);
		},
		[]
	);

	useEffect(() => {
		if (data) {
			dispatch(setIsLogin(true));
			navigate("/home");
		}
	}, [data, navigate, dispatch]);

	if (isLoading || data) return <LoadingComponent />;

	return (
		<div className=" flex flex-col items-stretch h-full">
			<div className="flex flex-grow flex-row gap-[32px] items-center justify-center">
				<ImageSlider />

				{LoginOrRegister === "login" ? (
					<LoginFormContainer
						registerButtonOnClick={LoginOrRegisterOnClick(
							"register"
						)}
					/>
				) : (
					<RegisterFormContainer
						loginButtonOnClick={LoginOrRegisterOnClick("login")}
					/>
				)}
			</div>
			<div className="flex justify-center">
				<Footer />
			</div>
		</div>
	);
}

export default Auth;
