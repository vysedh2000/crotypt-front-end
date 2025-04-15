import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <div>
      <div>{t("title")}</div>
      <p>{t("content")}</p>
    </div>
  );
}
