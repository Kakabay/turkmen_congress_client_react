import { useZusLang } from '@/zustand/use-zus-lang';
import Container from '../global/Container';
import { sectionsTranslations } from '@/lib/constants';

const PartnersSection = () => {
  const activeLang = useZusLang().activeLang;

  return (
    <section className="about">
      <Container>
        <div className="sm:flex hidden flex-col gap-8">
          <h2 className="font-64-regular">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.partner.sectionTitle
              : sectionsTranslations.en.partner.sectionTitle}
            —
          </h2>
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
                {activeLang.value === 'ru'
                  ? sectionsTranslations.ru.partner.description
                  : sectionsTranslations.en.partner.description}
              </p>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col gap-8">
          <h2 className="font-64-regular">General partner —</h2>
          <img src="/nelson.svg" alt="nelsonsmith" />

          <p className="font-14-regular text-onAnySurfaceVariant">
            Nielsonsmith is a highly specialised trade compliance focused international
            organisation, working closely with the compliance community to create assemblies that
            are produced through co operation with senior executives and leading analysts, to
            provide real insight and form a single point for the industry to meet, share ideas and
            experiences on a neutral platform. We are the compliance conference company.
          </p>

          <img src="/partners.png" alt="" className="rounded-[4px] w-full h-auto object-cover" />
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
