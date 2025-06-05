import { useZusLang } from "@/zustand/use-zus-lang";
import Container from "../global/Container";
import { sectionsTranslations } from "@/lib/constants";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Fade from "embla-carousel-fade";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const activeLang = useZusLang((state) => state.activeLang);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
      Fade(),
    ]
  );

  const { t } = useTranslation("home");

  return (
    <>
      <section
        className="hero sm:block hidden  w-full h-[996px] relative overflow-hidden"
        id="hero"
      >
        <div className="absolute top-0 left-0 size-full bg-gradient-to-b backdrop-blur-[8%] from-[#0D3767]/0 to-[#0D3767]/20 -z-10" />
        <div
          ref={emblaRef}
          className="ebmla overfow-hidden absolute top-0 left-0 -z-20"
        >
          <div className="embla__container flex">
            <div className="embla__slider flex-[0_0_100%] size-full object-cover">
              <img
                src={`/hero/${1}.jpg`}
                alt=""
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        <Container>
          <div className="h-[996px] w-full relative flex flex-col justify-end pb-2 gap-2">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[848px] w-full font-80-medium">
              {t("hero.title")}{" "}
            </h1>
            <div className="flex w-full justify-between items-end">
              <span className="font-14-regular">{t("hero.venue")}</span>
              <span className="font-18-regular max-w-[518px] w-full">
                {t("hero.moto")}
              </span>
            </div>
            <a
              href="#events"
              className="flex flex-col items-center justify-center mb-10 gap-1"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L18.2929 11.2929C18.6834 10.9024 19.3166 10.9024 19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z"
                  fill="#AAB8BD"
                />
              </svg>
              <span className="text-onAnySurfaceVariant text-[12px] font-medium">
                {t("hero.btn")}
              </span>
            </a>
          </div>
        </Container>
      </section>

      <section className=" flex flex-col gap-8 items-center sm:hidden pt-8">
        <div className="flex flex-col gap-4 text-center container">
          <h1 className="font-80-medium">{t("hero.title")} </h1>
          <h4 className="text-[14px]">{t("hero.venue")} </h4>
          <h5 className="text-[12px] font-medium">{t("hero.moto")} </h5>
        </div>

        <div className="w-full h-auto">
          <img src="/hero.png" alt="" className="size-full object-contain" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
