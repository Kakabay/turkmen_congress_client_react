import Container from "../global/Container";
import useEmblaCarousel from "embla-carousel-react";
import { EventCard } from "./EventCard";
import { useTranslation } from "react-i18next";

const EventsSection = () => {
  const [emblaRef] = useEmblaCarousel({});

  const { t } = useTranslation("home");

  const { title, items } = t("events", { returnObjects: true }) as {
    title: string;
    items: {
      cat: string;
      title: string;
      date: string;
    }[];
  };

  return (
    <section className="events overflow-x-hidden" id="events">
      <Container>
        <div className="sm:flex hidden flex-col gap-[38px]">
          <h2 className="font-64-regular">{title}</h2>

          <div ref={emblaRef} className="embla">
            <div className="embla__container flex gap-8">
              {items.map((item, i) => (
                <div className="flex-[0_0_100%] embla__slide" key={i}>
                  <EventCard
                    i={i}
                    className=""
                    image={`/events/${i + 1}.png`}
                    {...item}
                    key={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex sm:hidden flex-col gap-4">
          <h2 className="font-64-regular">{title}</h2>
          {items.map((item, i) => (
            <EventCard i={i} image={`/events/${i + 1}.png`} {...item} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
