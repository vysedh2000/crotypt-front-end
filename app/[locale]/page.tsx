import { useTranslations } from "next-intl";
import TopLanding from "./_components/landingPage/TopLanding";
import NavBar from "./_components/global/NavBar";
import { Button } from "@/components/ui/button";
import BodyOne from "./_components/landingPage/BodyOne";
import BodyTwo from "./_components/landingPage/BodyTwo";

export default function Home() {
	const t = useTranslations("Homepage");

	return (
		<div>
			<div className="positon-fixed">
				<NavBar />
			</div>
			<TopLanding />
			<BodyOne />
			<BodyTwo />
			<Button>Test</Button>
			<div>{t("title")}</div>
			<p>{t("content")}</p>
		</div>
	);
}
