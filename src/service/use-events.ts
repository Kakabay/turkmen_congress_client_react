import { useZusLang } from "@/zustand/use-zus-lang";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from ".";

export const useEvents = () => {
  const lang = useZusLang((state) => state.activeLang.value);

  const { data, isPending } = useQuery({
    queryKey: ["events", lang],
    queryFn: () => getEvents(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
