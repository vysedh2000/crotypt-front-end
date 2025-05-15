import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BodyOne = () => {
	const t = useTranslations("Homepage");
	return (
		<div className="w-full flex flex-col items-center justify-center h-[700px] mb-[80px]">
			<div className="flex flex-col items-center justify-center w-full h-[100px]">
				<p className="text-blue-900 text-xl">{t("trust")}</p>
			</div>
			<div className="flex justify-around w- w-full">
				<div className="flex flex-col items-center justify-center">
					<p className="text-3xl">18M+</p>
					<p>{t("client")}</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="text-3xl">168+</p>
					<p>{t("country")}</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="text-3xl">$200B+</p>
					<p>{t("querter")}</p>
				</div>
			</div>
			<div className="justify-around w-full flex mt-10 items-center">
				<div className="w-3/5 flex items-center justify-center">
					<Image
						className="rounded-lg drop-shadow-2xl"
						src={
							"https://i.ibb.co/H3ZP8Zt/a481e3b5142e798e2e26340aa4e1a865d2a1e0e2-1452x1070.png"
						}
						alt=""
						width={600}
						height={1000}></Image>
				</div>
				<div className="w-2/5">
					<p className="text-sm text-gray-500">{t("platform")}</p>
					<p className="text-3xl font-bold">{t("buyminute")}</p>
					<div className="flex items-center justify-start mt-10 space-x-3">
						<p className="rounded-full h-5 w-5 bg-gray-300 flex items-center justify-center">
							1
						</p>
						<p>{t("create")}</p>
					</div>
					<div className="flex items-center justify-start mt-3 space-x-3">
						<p className="rounded-full h-5 w-5 bg-gray-300 flex items-center justify-center">
							2
						</p>
						<p>{t("connect")}</p>
					</div>
					<div className="flex items-center justify-start mt-3 space-x-3">
						<p className="rounded-full h-5 w-5 bg-gray-300 flex items-center justify-center">
							3
						</p>
						<p>{t("bns")}</p>
					</div>
					<Link href={"#"}>
						<Button className="mt-7 bg-blue-500 rounded-xl border-0 hover:bg-blue-600 h-[40px]">
							{t("button")}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BodyOne;
