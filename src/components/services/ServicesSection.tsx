import Container from '../global/Container';
import ServiceCard from '../global/ServiceCard';
import { useZusLang } from '@/zustand/use-zus-lang';
import { sectionsTranslations } from '@/lib/constants';

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
