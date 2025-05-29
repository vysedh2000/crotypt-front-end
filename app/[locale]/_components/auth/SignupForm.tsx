"use client";
import { useState, useCallback } from "react";
import SortedCountryDropdown from "./CountryDropdown";
import { AnimatedInput } from "./AnimatedInput";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/i18n/routing";
import { signupAction } from "./_action/auth";
import { defaultResponse } from "@/app/types/default.type";
import { SUCCESS } from "@/app/constant/status";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface Country {
	code: string;
	commonName: string;
	officialName: string;
}

const SignupForm = () => {
	const t = useTranslations("Auth");
	const [cntryValue, setCntryValue] = useState<Country | null>(null);
	const [country, setCountry] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [agree, setAgree] = useState(false);
	const [agreeError, setAgreeError] = useState("");

	const handleSubmit = async () => {
		try {
			const request = {
				email: email,
				username: username,
				password: password,
				country: country,
			};
			const data: defaultResponse = await signupAction(request);
			if (data.status == SUCCESS) {
				redirect("/login");
			} else {
				toast.error("Error creating account!");
			}
		} catch (e: any) {
			toast.error(e.message);
		}
	};

	const handleSelect = useCallback((value: Country) => {
		setCountry(value.commonName);
		setCntryValue(value);
		console.log(value.commonName);
	}, []);

	const handleEmailChange = useCallback((value: string) => {
		setEmail(value);
		if (!value.includes("@")) {
			setEmailError(t("errorEmail"));
		} else {
			setEmailError("");
		}
	}, []);

	const handleUsernameChange = useCallback((value: string) => {
		setUsername(value);
		if (value.length < 5) {
			setUsernameError(t("errorUsername"));
		} else {
			setUsernameError("");
		}
	}, []);

	const handlePasswordChange = useCallback((value: string) => {
		setPassword(value);
		const hasUppercase = /[A-Z]/.test(value);
		const hasNumber = /[0-9]/.test(value);
		const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

		if (!hasUppercase || !hasNumber || !hasSpecialChar || value.length < 8) {
			setPasswordError(t("errorPassword"));
		} else {
			setPasswordError("");
		}
	}, []);

	const handleAgreeChange = () => {
		setAgree(!agree);
		if (!agree) {
			setAgreeError("");
		}
	};

	return (
		<div className="w-[600px] flex flex-col justify-center h-[500px] bg-white rounded-[30px] mt-10">
			<h1 className="font-bold text-3xl ml-7">{t("createAccount")}</h1>
			<div className="w-full flex items-center justify-center flex-col space-y-5 mt-5">
				<AnimatedInput
					className="rounded-lg w-[550px]"
					placeholder={t("email")}
					type="text"
					value={email}
					onChange={handleEmailChange}
					error={emailError}
				/>
				<AnimatedInput
					className="rounded-lg w-[550px]"
					placeholder={t("username")}
					type="text"
					value={username}
					onChange={handleUsernameChange}
					error={usernameError}
				/>
				<div className="relative">
					<AnimatedInput
						className="rounded-lg w-[550px] pr-10" // Padding right for icon space
						placeholder={t("password")}
						type="password"
						value={password}
						onChange={handlePasswordChange}
						error={passwordError}
					/>
				</div>
				<SortedCountryDropdown
					value={cntryValue?.code || ""}
					onChange={handleSelect}
					showOfficialName
					className="w-[550px]"
				/>
			</div>
			<div className="flex space-x-2 items-center justify-start mt-5 ml-7">
				<Checkbox onClick={handleAgreeChange} />
				<p>
					{t("agree1")}{" "}
					<Link className="text-blue-500" href={"#"}>
						{t("agree2")}
					</Link>{" "}
					{t("agree3")}{" "}
					<Link className="text-blue-500" href={"#"}>
						{t("agree4")}
					</Link>
				</p>
			</div>
			{agreeError && (
				<div className="relative mt-10">
					<div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-red-500"></div>

					<p className="text-red-500 text-xs text-center max-w-[550px] mx-auto px-4 py-2 bg-red-100 rounded-md shadow-md">
						{agreeError}
					</p>
				</div>
			)}
			<div className="flex flex-col justify-center items-center mt-5">
				<Button
					className="w-[550px] bg-blue-500 hover:bg-blue-600 h-[45px] text-lg rounded-xl"
					onClick={handleSubmit}>
					{t("sign")}
				</Button>
			</div>
		</div>
	);
};

export default SignupForm;
