import { NewsCard } from "@/components/shared/NewsCard";
import { useScrollTop } from "@/lib/utils";
import { useNews } from "@/service/use-news";
import { useTranslation } from "react-i18next";

export default function News() {
  useScrollTop();

  const { data } = useNews();
  const { t } = useTranslation("home");

  return (
    <div className="mt-[150px] container">
      <h1 className="font-64-regular text-center mb-12">{t("newsTitle")}</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {data?.map((item) => (
          <NewsCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
