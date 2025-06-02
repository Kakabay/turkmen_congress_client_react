import useEmblaCarousel from "embla-carousel-react";
import { TeamCard } from "./TeamCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation("home");
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeSlide, setActiveSlide] = useState(1);

  const scrollToSnap = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveSlide(emblaApi?.selectedScrollSnap() + 1);

      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const data = t("about.team", { returnObjects: true }) as {
    title: string;
    items: {
      name: string;
      speciality: string;
      image: string;
      bio: string[];
    }[];
  };

  const btnClassName =
    "size-12 bg-white rounded-full flex items-center justify-center -mt-20 z-20";

  return (
    <div className="relative">
      <h3 className="text-gold font-36-medium text-center mb-8">
        {data.title}
      </h3>

      <div className="flex w-full justify-between items-center translate-y-80 relative z-50">
        <button
          disabled={!canScrollPrev}
          onClick={() => emblaApi?.scrollPrev()}
          className={cn("top-1/2 -translate-y-1/2 left-0", btnClassName)}
        >
          <ChevronLeft color="black" />
        </button>

        <button
          disabled={!canScrollNext}
          onClick={() => emblaApi?.scrollNext()}
          className={cn("top-1/2 -translate-y-1/2 right-0", btnClassName)}
        >
          <ChevronRight color="black" />
        </button>
      </div>

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex gap-4">
          {data.items.map((item, i) => (
            <TeamCard
              {...item}
              image={`/team/${i + 1}.png`}
              key={i}
              className="flex-[0_0_32.5%]"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {[...Array(2)].map((_, i) => (
          <div
            onClick={() => scrollToSnap?.(i)}
            className={cn(
              "w-4 h-1 rounded-full cursor-pointer transition-colors",
              activeSlide !== i + 1 ? "bg-surfaceContainer" : "bg-onAnySurface"
            )}
          />
        ))}
      </div>
    </div>
  );
};
