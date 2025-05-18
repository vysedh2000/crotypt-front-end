import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AuthNavBar = ({ atLogin }: { atLogin: boolean }) => {
	const t = useTranslations("Auth");
	return (
		<div className="bg-gray-100 w-full h-[60px] justify-between flex items-center">
			<div className="pl-10">
				<Link href={"/"}>
					<Image
						src={"https://i.ibb.co/TxmH6YPG/images.png"}
						alt=""
						width={50}
						height={50}
					/>
				</Link>
			</div>
			<div className="mr-10">
				{atLogin ? (
					<Link href={"/signup"}>
						<Button className="border-1 border-blue-500 bg-gray-100 text-black hover:bg-blue-100">
							{t("signup")}
						</Button>
					</Link>
				) : (
					<Link href={"/login"}>
						<Button className="border-1 border-blue-500 bg-gray-100 text-black hover:bg-blue-100">
							{t("login")}
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default AuthNavBar;
