import { useZusLang } from "@/zustand/use-zus-lang";
import { useQuery } from "@tanstack/react-query";
import { getTeam } from ".";

export const useTeam = () => {
  const lang = useZusLang((state) => state.activeLang.value);

  const { data, isPending } = useQuery({
    queryKey: ["team", lang],
    queryFn: () => getTeam(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
