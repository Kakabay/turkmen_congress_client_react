import Container from "../global/Container";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";

const HeroSection = () => {
  const { t } = useTranslation("home");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollPosition = window.pageYOffset;
        // Adjust the 0.3 value to control the parallax speed (lower = slower)
        videoRef.current.style.transform = `translateY(${
          scrollPosition * 0.4
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className="hero sm:block hidden w-full h-screen overflow-hidden relative"
        id="hero"
      >
        <div className="absolute top-0 left-0 size-full brightness-[0.7] overflow-hidden">
          <video
            id="vid"
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            src="/hero/cover.mov"
            className="size-full object-cover min-h-screen"
            style={{
              willChange: "transform", // Optimizes for performance
              transition: "transform 0.1s ease-out", // Smooths the parallax effect
            }}
          />
        </div>

        <Container>
          <div className="h-screen w-full flex flex-col justify-end pb-2 gap-2 relative z-30">
            <h1
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] w-full font-80-medium"
              dangerouslySetInnerHTML={{ __html: String(t("hero.title")) }}
            />

            <div className="flex w-full bottom-6 justify-between items-end">
              <span className="font-14-regular">{t("hero.venue")}</span>
            </div>
            <a
              href="#events"
              className="flex flex-col absolute -translate-x-1/2 left-1/2 items-center justify-center gap-1"
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

      <section className="flex flex-col gap-8 items-center sm:hidden pt-8">
        <div className="flex flex-col gap-4 text-center container">
          <h1
            className="font-80-medium"
            dangerouslySetInnerHTML={{ __html: String(t("hero.title")) }}
          />
          <h4 className="text-[14px]">{t("hero.venue")}</h4>
        </div>

        <div className="w-full h-auto">
          <video
            muted
            autoPlay
            loop
            playsInline
            src="https://qacis.turkmenexpo.com/app/storage/app/media/video/1%20Conference%202025_1.mp4"
            className="size-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
