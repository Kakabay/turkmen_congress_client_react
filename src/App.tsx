import Header from './components/header/Header';
import ServicesSection from './components/services/ServicesSection';
import HeroSection from './components/hero/HeroSection';
import EventsSection from './components/events/EventsSection';
import PartnersSection from './components/partners/PartnersSection';

import AboutSection from './components/about/AboutSection';
import ContactsSection from './components/contact/ContactsSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:gap-[200px] gap-20 w-full" id="home">
        <HeroSection />

        <div id="events" className="-mb-[200px] pt-[100px]"></div>

        <EventsSection />

        <div id="services" className="-mb-[200px] pt-[100px]"></div>

        <ServicesSection />

        <div id="about" className="-mb-[200px] pt-[100px]"></div>

        <AboutSection />

        <div id="partners" className="-mb-[200px] pt-[100px]"></div>

        <PartnersSection />

        <div id="contact" className="-mb-[200px] pt-[100px]"></div>

        <ContactsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
