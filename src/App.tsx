import { useState } from 'react';
import Container from './components/global/Container';
import Header from './components/header/Header';
import ServiceCard from './components/global/ServiceCard';
import ServicesSection from './components/services/ServicesSection';

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
      <main className="flex flex-col gap-[200px] w-full">
        <section className="hero bg-hero-img w-full h-[996px]">
          <Container>
            <div className="h-[996px] w-full relative flex flex-col justify-end pb-2 gap-2">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[848px] w-full font-80-medium">
                Professional events with a personal touch
              </h1>
              <div className="flex w-full justify-between items-end">
                <span className="font-14-regular">Turkmenistan, Ashgabat</span>
                <span className="font-18-regular">
                  Make your event: Innovative technologies, creative formats.
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L18.2929 11.2929C18.6834 10.9024 19.3166 10.9024 19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z"
                    fill="#AAB8BD"
                  />
                </svg>
                <span className="text-onAnySurfaceVariant text-[12px] font-medium">
                  Click here or scroll down
                </span>
              </div>
            </div>
          </Container>
        </section>

        <section className="events">
          <Container>
            <div className="flex flex-col gap-[38px]">
              <h2 className="font-64-regular">Upcoming event</h2>
              <div className="bg-surfaceContainerLow p-8 rounded-sm border border-surfaceContainerLowOutline flex justify-between gap-8">
                <div className=" flex flex-col  w-full justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="font-14-medium">Global forum</span>
                    <h3 className="mb-2 font-36-medium">
                      Commercial, Investment and Business pportunities in Turkmenistan 2024
                    </h3>
                    <span className="font-20-medium">7-8 November 2024 - Abu Dhabi, UAE</span>
                  </div>
                  <div className="flex w-full justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <span className="font-14-regular text-onAnySurfaceVariant">Organizers:</span>
                      <div className="h-[64px] w-[221px]">
                        <img
                          src="/organizers.png"
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 w-[203px]">
                      <span className="font-14-regular text-onAnySurfaceVariant">
                        Co-organizer:
                      </span>
                      <div className="w-[173px] h-[64px]">
                        <img
                          src="/congress_logo.svg"
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[480px] max-h-[270px] h-full w-full rounded-[2px] overflow-hidden">
                  <img
                    src="/card.jpg"
                    alt=""
                    className="rounded-[2px] w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ServicesSection />

        <section className="about">
          <Container>
            <div className="flex flex-col gap-8">
              <h2 className="font-64-regular">General partner —</h2>
              <div className="flex justify-between items-end pb-8 border-b border-outline gap-8">
                <div className="rounded-[4px] overflow-hidden w-[369px] h-[260px] ml-[110px]">
                  <img
                    src="/partners.png"
                    alt=""
                    className="rounded-[4px] w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <img src="/nelson.svg" alt="nelsonsmith" />
                  </div>
                  <p className="font-18-regular max-w-[628px] w-full text-onAnySurfaceVariant">
                    Nielsonsmith is a highly specialised trade compliance focused international
                    organisation, working closely with the compliance community to create assemblies
                    that are produced through co operation with senior executives and leading
                    analysts, to provide real insight and form a single point for the industry to
                    meet, share ideas and experiences on a neutral platform. We are the compliance
                    conference company.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
