"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { AnimatedInput } from "./AnimatedInput";
import { useCallback, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { loginAction } from "./_action/auth";
import { defaultResponse } from "@/app/types/default.type";
import { SUCCESS } from "@/app/constant/status";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [exp, setExp] = useState(false);
	const [isEmail, setIsemail] = useState(false);
	const handleEmailChange = useCallback((value: string) => {
		setEmail(value);
		if (value.includes("@")) {
			setIsemail(true);
		} else {
			setIsemail(false);
		}
	}, []);

	const handlePasswordChange = useCallback((value: string) => {
		setPassword(value);
	}, []);
	const handleSubmit = async () => {
		try {
			let request;
			if (isEmail) {
				request = { email: email, password: password };
			} else if (!isEmail) {
				request = { username: email, password: password };
			}
			const data: defaultResponse = await loginAction(request);
			if (!(data.status == SUCCESS) && data.code == "420") {
				toast.error(t("invalid"));
			} else {
				router.push("/");
			}
		} catch (e: any) {
			toast.error(e.message);
		}
	};
	const handleRemember = () => {
		setExp(!exp);
	};
	const t = useTranslations("Auth");
	return (
		<div className="w-[500px] h-[540px] bg-white rounded-[22px] flex justify-center drop-shadow-xl">
			<div className="mt-10 flex flex-col items-center space-y-10">
				<Image
					src={
						"https://i.ibb.co/9kn4nd5R/futuristic-bitcoin-cryptocurrency-coin-design-1308-179315.jpg"
					}
					width={100}
					height={100}
					alt=""
				/>
				<h1 className="font-bold text-2xl">{t("logintitle")}</h1>
				<div className="space-y-1">
					<AnimatedInput
						onChange={handleEmailChange}
						className="rounded-t-xl"
						type="text"
						placeholder={`${t("username")} ${t("or")} ${t("email")}`}
					/>
					<AnimatedInput
						onChange={handlePasswordChange}
						type="password"
						className="rounded-b-xl"
						placeholder={t("password")}
					/>
					<div className="flex ml-2 mt-3 space-x-3">
						<Checkbox className="mt-1" onClick={handleRemember} />
						<p>{t("remember")}</p>
					</div>
					<p className="text-[15px] mt-3 pl-2">
						{t("forgot")}{" "}
						<Link className="text-blue-700" href={"#"}>
							{t("password")}
						</Link>{" "}
						{t("or")}{" "}
						<Link className="text-blue-700" href={"#"}>
							{t("username")}
						</Link>
						?
					</p>
					<Button
						onClick={handleSubmit}
						className="w-[450px] mt-5 h-[45px] text-[17px] font-bold bg-blue-500 hover:bg-blue-600 rounded-xl">
						{t("continue")}
					</Button>

					<div className="flex items-center justify-center">
						<p className="text-[15px] mt-3 pl-2">
							{t("cantsign")}{" "}
							<Link className="text-blue-500" href={"#"}>
								Email{" "}
							</Link>
							{t("us")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
