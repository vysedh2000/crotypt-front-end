import Image from "next/image";
import Link from "next/link";
import LinkButton from "./LinkButton";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const NavBar = () => {
	const t = useTranslations("NavBar");
	return (
		<div className="flex flex-row justify-between items-center bg-gray-800 p-4 h-[60px] bg-white">
			<div className="flex justify-between m-[20px] w-full">
				<div className="flex space-x-[40px]">
					<Image
						src={"https://i.ibb.co/TxmH6YPG/images.png"}
						width={40}
						height={40}
						alt=""></Image>
					<div className="flex space-x-[50px] mt-[10px] decoration-[#000000]">
						<LinkButton name={t("explore")} route="#" />
						<LinkButton name={t("pricing")} route="#" />
						<LinkButton name={t("whyus")} route="#" />
						<LinkButton name={t("learn")} route="#" />
						<LinkButton name={t("support")} route="#" />
					</div>
				</div>
				<div className="flex space-x-[10px] justify-center items-center">
					<Link href={"#"}>
						<Button className="bg-blue-500 hover:bg-blue-600">
							{t("login")}
						</Button>
					</Link>
					<Link href={"#"}>
						<Button className="bg-white border-blue-400 border-1 text-black hover:bg-blue-100">
							{t("signup")}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
