import React from 'react';
import Container from '../global/Container';
import ServiceCard from '../global/ServiceCard';
import { useZusLang } from '@/zustand/use-zus-lang';
import { sectionsTranslations } from '@/lib/constants';

const services = [
  {
    img: '/service1.png',
    title: 'Event organisation',
    text: 'Mass events, international conferences, congresses and forums across the country and abroad.',
  },
  {
    img: '/service2.png',
    title: 'Hybrid events',
    text: 'Hybrid conferences, teleconferences, teleconferences, business breakfasts, banquets, competitions and other online events.',
  },
  {
    img: '/service3.png',
    title: 'Events for business',
    text: 'Business meetings, corporate trainings and professional congresses to enhance brand reputation.',
  },
];

const ServicesSection = () => {
  const activeLang = useZusLang().activeLang;

  return (
    <section className="services">
      <Container>
        <div className="flex flex-col gap-[64px] ">
          <div className="flex flex-col sm:gap-8 gap-4 justify-center items-center">
            <h2 className="font-64-regular">
              {activeLang.value === 'ru'
                ? sectionsTranslations.ru.services.sectionTitle
                : sectionsTranslations.en.services.sectionTitle}
            </h2>
            <p className="text-center max-w-[628px] w-full sm:font-18-regular font-14-regular text-onAnySurfaceVariant">
              {activeLang.value === 'ru'
                ? sectionsTranslations.ru.services.sectionText
                : sectionsTranslations.en.services.sectionText}
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-8">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.services.services.map((item, i) => (
                  <ServiceCard img={item.img} text={item.description} title={item.title} key={i} />
                ))
              : sectionsTranslations.en.services.services.map((item, i) => (
                  <ServiceCard img={item.img} text={item.description} title={item.title} key={i} />
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
