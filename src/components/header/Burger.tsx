import { languages } from '@/lib/constants';
import { motion } from 'framer-motion';
import LanguageDropdown from './LanguageDropdown';
import { useScrollLock } from 'usehooks-ts';
import { useZusLang } from '@/zustand/use-zus-lang';

interface Props {
  setActive: (value: boolean) => void;
  active: boolean;
}

// const data = [{}];

const Burger = ({ setActive }: Props) => {
  useScrollLock();

  const activeLang = useZusLang().activeLang;

  return (
    <motion.div
      initial={{ translate: '100%', opacity: 0 }}
      animate={{ translate: 0, opacity: 1 }}
      exit={{ translate: '100%', opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
      className="fixed z-50 top-0 left-0 h-full w-full bg-surfaceContainer overflow-hidden">
      <img src="/close.svg" onClick={() => setActive(false)} className="absolute top-3 right-3" />

      <div className="flex flex-col gap-20 container mt-[30%]">
        <div className="flex flex-col gap-8">
          {activeLang.value === 'ru'
            ? languages.english.items.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex text-[20px] leading-[140%] text-white items-center gap-4"
                  onClick={() => setActive(false)}>
                  <img src="/arrow.svg" />
                  {item.name}
                </a>
              ))
            : languages.russian.items.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex text-[20px] leading-[140%] text-white items-center gap-4"
                  onClick={() => setActive(false)}>
                  <img src="/arrow.svg" />
                  {item.name}
                </a>
              ))}
        </div>

        <LanguageDropdown />
      </div>
    </motion.div>
  );
};

export default Burger;
