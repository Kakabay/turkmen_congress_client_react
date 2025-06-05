import useEmblaCarousel from "embla-carousel-react";
import { TeamCard } from "./TeamCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTeam } from "@/service/use-team";
import Loader from "../global/Loader";

export const Team = () => {
  const { t } = useTranslation("home");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    slidesToScroll: 4,
  });

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

  const stats = t("about.team", { returnObjects: true }) as {
    title: string;
    items: {
      name: string;
      speciality: string;
      image: string;
      bio: string[];
    }[];
  };

  const { data, isPending } = useTeam();

  const sortedData = [...(data ?? [])].sort(
    (a, b) => a?.order_id - b?.order_id
  );

  const btnClassName =
    "size-12 bg-white rounded-full flex items-center justify-center -mt-20 z-20";

  return (
    <div className="relative overflow-hidden">
      <h3 className="text-gold font-36-medium text-center mb-8">
        {stats.title}
      </h3>

      {isPending ? (
        <Loader />
      ) : (
        <>
          <div className="md:flex hidden  w-full justify-between items-center translate-y-80 relative z-30">
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

          <div ref={emblaRef} id="team" className="embla">
            <div className="embla__container flex gap-4">
              {sortedData?.map((item, i) => (
                <TeamCard
                  {...item}
                  key={i}
                  className="lg:flex-[0_0_24.2%] md:flex-[0_0_35%] sm:flex-[0_0_50%] flex-[0_0_75%] h-full"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {[
              ...Array(data?.concat.length ? Math.round(data?.length / 3) : 3),
            ].map((_, i) => (
              <div
                key={i}
                onClick={() => scrollToSnap?.(i)}
                className={cn(
                  "w-4 h-1 rounded-full cursor-pointer transition-colors",
                  activeSlide !== i + 1
                    ? "bg-surfaceContainer"
                    : "bg-onAnySurface"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
