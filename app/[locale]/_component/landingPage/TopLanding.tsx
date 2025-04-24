import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Image from "next/image";

const TopLanding = () => {
	const t = useTranslations("Homepage");
	return (
		<div className="max-w-full w-full h-[552px] flex flex-col bg-gray-100 items-center justify-between">
			<div className="flex justify-center space-x-[100px] items-center w-full h-[800px]">
				<div className="h-full">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="scale-x-[-1]"
						width={400}
						height={900}
						src="https://assets-cms.kraken.com/files/51n36hrp/facade/0201a5f764735272aace1f1181d12014108eaa91.webm"></video>
				</div>

				<div className="space-y-5">
					<h1 className="text-4xl font-bold">{t("landing")}</h1>
					<p className="text-lg line-clamp-3 whitespace-pre-line">
						{t("desc")}
					</p>
					<div className="flex space-x-3">
						<Input
							placeholder={t("placeholder")}
							className="border-1 bg-white border-gray-400 w-[380px] h-[45px] placeholder:text-lg text-lg"
						/>
						<Button className="h-[45px] w-[90px] bg-blue-500 rounded-xl border-blue-300 border-1 text-white hover:bg-blue-600">
							{t("button")}
						</Button>
					</div>
					<div>
						<p className="font-bold text-2xl">CTN</p>
						<p className="text-sm text-gray-500">{t("info")}</p>
						<Image
							className="mt-10"
							src={
								"https://i.ibb.co/LdkkZQg2/Screenshot-2025-04-23-at-10-48-02-at-night.png"
							}
							alt=""
							width={80}
							height={80}></Image>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopLanding;
