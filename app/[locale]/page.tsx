import { useTranslations } from "next-intl";
import TopLanding from "./_component/landingPage/TopLanding";
import NavBar from "./_component/global/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
	const t = useTranslations("Homepage");

	return (
		<div>
			<div className="positon-fixed">
				<NavBar />
			</div>
			<TopLanding />
			<Button>Test</Button>
			<div>{t("title")}</div>
			<p>{t("content")}</p>
		</div>
	);
}
