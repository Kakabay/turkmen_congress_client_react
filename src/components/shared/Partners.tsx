import { usePartners } from "@/service/use-partners";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";

export const Partners = () => {
  const { t } = useTranslation("home");
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({})]
  );

  const { data } = usePartners();

  return (
    <section className="container">
      <h2 className="md:font-64-regular font-36-medium mb-8">
        {t("partners.title")}
      </h2>

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container flex h-[145px] gap-8">
          {data?.map((item, i) => (
            <div
              className="bg-surfaceContainerLow embla__slide flex-[0_0_350px] h-full p-4"
              key={i}
            >
              <img
                src={item?.image?.path}
                alt=""
                className="size-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
