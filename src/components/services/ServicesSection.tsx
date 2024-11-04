import React from 'react';
import Container from '../global/Container';
import ServiceCard from '../global/ServiceCard';

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
  return (
    <section className="services">
      <Container>
        <div className="flex flex-col gap-[64px] ">
          <div className="flex flex-col gap-8 justify-center items-center">
            <h2 className="font-64-regular">We offer...</h2>
            <p className="text-center max-w-[628px] w-full font-18-regular text-onAnySurfaceVariant">
              ...comprehensive services, including venue selection and rental, event decor and
              technical support, logistics coordination for participants and speakers, event
              management, media relations, and post-event follow-up.
            </p>
          </div>
          <div className="flex justify-between gap-8">
            {services.map((item, i) => (
              <ServiceCard img={item.img} text={item.text} title={item.title} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
