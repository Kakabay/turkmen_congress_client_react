import Container from '../global/Container';
import { languages } from '@/lib/constants';
import LanguageDropdown from './LanguageDropdown';

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 right-0">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-8">
            <div className="">
              <img src="/congress_logo.svg" alt="logo" />
            </div>
            <LanguageDropdown />
          </div>
          <nav className="flex items-center gap-6">
            {languages.russian.items.map((item) => (
              <a
                href={item.link}
                className="text-onAnySurface font-[450] -tracking-[2%] text-[14px] inline-block py-3 hover:text-onAnySurfaceVariant transition-all duration-300 ease-in-out">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
