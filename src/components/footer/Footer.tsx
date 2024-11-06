import Container from '../global/Container';
import { useZusLang } from '@/zustand/use-zus-lang';
import { sectionsTranslations } from '@/lib/constants';

const Footer = () => {
  const activeLang = useZusLang().activeLang;

  return (
    <footer className="sm:py-[64px] pt-4 pb-8">
      <Container>
        <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
          <div className="">
            <img src="/congress_logo.svg" alt="logo" />
          </div>

          <span className="sm:font-18-regular font-14-regular text-onAnySurfaceVariant">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.footer.rights
              : sectionsTranslations.en.footer.rights}
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
