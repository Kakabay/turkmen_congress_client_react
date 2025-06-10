import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import EventsSection from "./components/events/EventsSection";

import AboutSection from "./components/about/AboutSection";
import ContactsSection from "./components/contact/ContactsSection";
import Footer from "./components/footer/Footer";
import LanguageSync from "./lang-sync";
import { Partners } from "./components/shared/Partners";

import ReactLenis from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <LanguageSync />

      <Header />

      <main className="flex flex-col sm:gap-24 gap-20 w-full" id="home">
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

        <div id="contact" className="-mb-[200px] pt-[100px]"></div>

        <ContactsSection />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
