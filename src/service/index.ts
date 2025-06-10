import axios from "axios";
import { Team } from "./types/team.type";
import { Events } from "./types/events.type";
import { Partners } from "./types/partners.type";
import { NewsInnerType, NewsType } from "./types/news.type";

const axios_url = axios.create({
  baseURL: "https://turkmencongress.com/app/api/v1/",
});

export const getTeam = (lang: string) => {
  const data = axios_url.get<Team>("ourTeam", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getEvents = (lang: string) => {
  const data = axios_url.get<Events>("events", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getPartners = () => {
  const data = axios_url.get<Partners>("partners");

  return data;
};

export const getNews = (lang: string) => {
  const data = axios_url.get<NewsType>("news?per_page=50", {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};

export const getNewsInner = (lang: string, id: number) => {
  const data = axios_url.get<NewsInnerType>("news/" + id, {
    headers: {
      "Accept-Language": lang,
    },
  });

  return data;
};
