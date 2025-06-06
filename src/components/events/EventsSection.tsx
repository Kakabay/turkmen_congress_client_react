import Container from "../global/Container";
import { EventCard } from "./EventCard";
import { useTranslation } from "react-i18next";
import { useEvents } from "@/service/use-events";
import Loader from "../global/Loader";

const EventsSection = () => {
  const { t } = useTranslation("home");

  const { title } = t("events", { returnObjects: true }) as {
    title: string;
    items: {
      cat: string;
      title: string;
      date: string;
    }[];
  };

  const { data, isPending } = useEvents();

  return (
    <section className="events overflow-x-hidden" id="events">
      <Container>
        <div className="sm:flex hidden flex-col gap-[38px]">
          <h2 className="font-64-regular">{title}</h2>
          {isPending ? (
            <Loader />
          ) : (
            <div className="embla">
              <div className="embla__container flex flex-col gap-8">
                {data?.map((item, i) => (
                  <a
                    href={
                      i === 0
                        ? "https://turkmenistan.nielsonsmith.com/"
                        : i === 1
                        ? "http://qacis.turkmenexpo.com/"
                        : "https://tkmchess.com.tm/news/60/"
                    }
                    target="_blank"
                    className="flex-[0_0_100%] embla__slide cursor-pointer"
                    key={i}
                  >
                    <EventCard className="" {...item} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex sm:hidden flex-col gap-4">
          <h2 className="font-64-regular">{title}</h2>
          {data?.map((item, i) => (
            <EventCard {...item} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
