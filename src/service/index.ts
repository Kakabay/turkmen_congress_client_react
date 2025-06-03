import axios from "axios";
import { Team } from "./types/team.type";
import { Events } from "./types/events.type";

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
