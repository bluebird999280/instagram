import { useCallback, useState } from "react";
import LoginForm from "@/containers/auth/LoginForm/LoginForm";
import ImageSlider from "@/components/auth/ImageSlider/ImageSlider";
import Footer from "@/components/auth/Footer";
import RegisterForm from "@/containers/auth/RegisterForm/RegisterForm";
import { resetError } from "@/slices/user/slice";
import { useAppDispatch } from "@/utils/hooks/redux";

export default function AuthPage() {
	const dispatch = useAppDispatch();
	const [LoginOrRegister, setLoginOrRegister] = useState("login");

	const LoginOrRegisterOnClick = useCallback(
		(type: string) => () => {
			dispatch(resetError());
			setLoginOrRegister(type);
		},
		[dispatch]
	);

	return (
		<div className="flex flex-col items-stretch h-full ">
			<div className="flex flex-grow flex-row gap-[32px] items-center justify-center">
				<ImageSlider />

				{LoginOrRegister === "login" ? (
					<LoginForm
						registerButtonOnClick={LoginOrRegisterOnClick(
							"register"
						)}
					/>
				) : (
					<RegisterForm
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
