import { useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatedInputName } from "./AnimatedInputName";
import { AnimatedInputPW } from "./AnimatedInputPW";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
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
					<AnimatedInputName />
					<AnimatedInputPW />
					<p className="text-[15px] mt-3 pl-2">
						Forgot{" "}
						<Link className="text-blue-700" href={"#"}>
							password
						</Link>{" "}
						or{" "}
						<Link className="text-blue-700" href={"#"}>
							username
						</Link>
						?
					</p>
					<Button className="w-[450px] mt-5 h-[45px] text-[17px] font-bold bg-blue-500 hover:bg-blue-600 rounded-xl">
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
