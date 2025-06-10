import { useZusLang } from "@/zustand/use-zus-lang";
import { useQuery } from "@tanstack/react-query";
import { getNews } from ".";

export const useNews = () => {
  const lang = useZusLang((state) => state.activeLang.value);

  const { data, isPending } = useQuery({
    queryKey: ["news", lang],
    queryFn: () => getNews(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
