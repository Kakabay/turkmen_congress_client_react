import { useZusLang } from "@/zustand/use-zus-lang";
import { useQuery } from "@tanstack/react-query";
import { getNewsInner } from ".";

export const useNewsInner = (id: number) => {
  const lang = useZusLang((state) => state.activeLang.value);

  const { data, isPending } = useQuery({
    queryKey: [`news-${id}`, lang, id],
    queryFn: () => getNewsInner(lang, id),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
