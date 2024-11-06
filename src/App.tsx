import Container from './components/global/Container';
import Header from './components/header/Header';
import ServicesSection from './components/services/ServicesSection';
import HeroSection from './components/hero/HeroSection';
import EventsSection from './components/events/EventsSection';
import PartnersSection from './components/partners/PartnersSection';
import ContactForm from './components/contact/ContactForm';
import { useZusLang } from './zustand/use-zus-lang';
import { sectionsTranslations } from './lib/constants';
import AboutSection from './components/about/AboutSection';
import ContactsSection from './components/contact/ContactsSection';
import Footer from './components/footer/Footer';

interface LanguageItem {
  name: string;
  link: string;
}

interface Language {
  value: string;
  view: string;
  items: LanguageItem[];
}

interface Languages {
  russian: Language;
  english: Language;
  turkmen: Language;
}

const languages: Languages = {
  russian: {
    value: 'ru',
    view: 'Русский',
    items: [
      {
        name: 'We offer',
        link: '#services',
      },
      {
        name: 'Who we are',
        link: '#about',
      },
      {
        name: 'Contact us',
        link: '#contact',
      },
    ],
  },
  english: {
    value: 'en',
    view: 'English',
    items: [
      {
        name: 'We offer',
        link: '#services',
      },
      {
        name: 'Who we are',
        link: '#about',
      },
      {
        name: 'Contact us',
        link: '#contact',
      },
    ],
  },
  turkmen: {
    value: 'tm',
    view: 'Türkmen',
    items: [
      {
        name: 'We offer',
        link: '#services',
      },
      {
        name: 'Who we are',
        link: '#about',
      },
      {
        name: 'Contact us',
        link: '#contact',
      },
    ],
  },
};

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:gap-[200px] gap-20 w-full">
        <HeroSection />

        <EventsSection />

        <div id="services"></div>

        <ServicesSection />

        <div id="about"></div>

        <AboutSection />

        <PartnersSection />

        <div id="contact"></div>

        <ContactsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
