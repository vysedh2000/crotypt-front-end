import { Link } from "@/i18n/routing";
import {
	ArrowLeftRight,
	Clock,
	HomeIcon,
	Search,
	TimerIcon,
	Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";

const ExploreSideBar = () => {
	const t = useTranslations("Explore");
	return (
		<div className="flex flex-col items-center w-full p-2 space-y-1">
			<Link href={"/"}>
				<button className="flex flex-col items-center w-full p-3 rounded-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
					<HomeIcon className="w-5 h-5 mb-1.5 text-foreground" />
					<p className="text-sm font-medium text-foreground">{t("home")}</p>
				</button>
			</Link>
			<Link href={"/explore"}>
				<button className="flex flex-col items-center w-full p-3 rounded-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
					<Search className="w-5 h-5 mb-1.5 text-foreground" />
					<p className="text-sm font-medium text-foreground">{t("explore")}</p>
				</button>
			</Link>
			<Link href={"/wallet"}>
				<button className="flex flex-col items-center w-full p-3 rounded-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
					<Wallet className="w-5 h-5 mb-1.5 text-foreground" />
					<p className="text-sm font-medium text-foreground">{t("wallet")}</p>
				</button>
			</Link>
			<Link href={"/transfer"}>
				<button className="flex flex-col items-center w-full p-3 rounded-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
					<ArrowLeftRight className="w-5 h-5 mb-1.5 text-foreground" />
					<p className="text-sm font-medium text-foreground">{t("transfer")}</p>
				</button>
			</Link>
			<Link href={"/transaction"}>
				<button className="flex flex-col items-center w-full p-3 rounded-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
					<Clock className="w-5 h-5 mb-1.5 text-foreground" />
					<p className="text-sm font-medium text-foreground">
						{t("transaction")}
					</p>
				</button>
			</Link>
		</div>
	);
};

export default ExploreSideBar;
