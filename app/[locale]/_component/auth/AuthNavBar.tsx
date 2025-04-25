import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AuthNavBar = () => {
	const t = useTranslations("Auth");
	return (
		<div className="bg-gray-100 w-full h-[60px] justify-between flex items-center">
			<div className="pl-10">
				<Image
					src={"https://i.ibb.co/TxmH6YPG/images.png"}
					alt=""
					width={50}
					height={50}
				/>
			</div>
			<div className="mr-10">
				<Button className="border-1 border-blue-500 bg-gray-100 text-black hover:bg-blue-100">
					{t("signup")}
				</Button>
			</div>
		</div>
	);
};

export default AuthNavBar;
