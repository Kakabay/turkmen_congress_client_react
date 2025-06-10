import AboutSection from "@/components/about/AboutSection";
import ContactsSection from "@/components/contact/ContactsSection";
import EventsSection from "@/components/events/EventsSection";
import HeroSection from "@/components/hero/HeroSection";
import { NewsCard } from "@/components/shared/NewsCard";
import { Partners } from "@/components/shared/Partners";
import { useNews } from "@/service/use-news";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { data } = useNews();
  const { t } = useTranslation("home");

  return (
    <div className="flex flex-col sm:gap-24 gap-20 w-full" id="home">
      <HeroSection />

      <div id="events" className="-mb-[200px] pt-[100px]"></div>

      <EventsSection />

      {/* <div id="services" className="-mb-[200px] pt-[100px]"></div>

        <ServicesSection /> */}

      <div id="about" className="-mb-[200px] pt-[100px]"></div>

      <AboutSection />

      {/* <div id="partners" className="-mb-[200px] pt-[100px]"></div>

        <PartnersSection /> */}

      <Partners />

      <section className="container">
        <h2 className="font-64-regular mb-8">{t("newsTitle")}</h2>
        <div className="grid  md:grid-cols-3 grid-cols-1 gap-6">
          {data?.slice(0, 3).map((item) => (
            <NewsCard {...item} key={item.title} />
          ))}
        </div>
      </section>

      <div id="contact" className="-mb-[200px] pt-[100px]"></div>

      <ContactsSection />
    </div>
  );
}
