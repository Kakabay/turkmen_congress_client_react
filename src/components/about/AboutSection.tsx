import { sectionsTranslations } from '@/lib/constants';
import { useZusLang } from '@/zustand/use-zus-lang';
import Container from '../global/Container';

const AboutSection = () => {
  const activeLang = useZusLang().activeLang;

  return (
    <section className="about">
      <Container>
        <div className="flex flex-col md:gap-8 gap-4">
          <h2 className="md:font-64-regular font-36-medium">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.about.sectionTitle
              : sectionsTranslations.en.about.sectionTitle}
          </h2>
          <div className="flex md:flex-row md:gap-8 flex-col gap-4">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.about.texts.map((item, i) => (
                  <p
                    key={i}
                    className="md:font-18-regular font-14-regular !text-onAnySurfaceVariant">
                    {item}
                  </p>
                ))
              : sectionsTranslations.en.about.texts.map((item, i) => (
                  <p
                    key={i}
                    className="md:font-18-regular font-14-regular !text-onAnySurfaceVariant">
                    {item}
                  </p>
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
