import Container from "../global/Container";
import { languages } from "@/lib/constants";
import LanguageDropdown from "./LanguageDropdown";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useZusLang } from "@/zustand/use-zus-lang";
import Burger from "./Burger";

const Header = () => {
  const [scrollY, setScrollY] = useState(false);
  const [burger, setBurger] = useState(false);

  const activeLang = useZusLang().activeLang;

  const handleScroll = () => {
    setScrollY(window.scrollY > 20 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {burger && <Burger active={burger} setActive={setBurger} />}
      </AnimatePresence>

      <header
        className={cn(
          "fixed w-full hidden sm:block z-10 top-0 left-0 right-0 transition-all duration-200 ease-in-out",
          {
            "bg-transparent text-onAnySurface": !scrollY,
            "bg-backgroundInverse  text-onAnySurfaceInverse": scrollY,
          }
        )}
      >
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-8">
              <a href="#home" className="">
                {scrollY ? (
                  <img src="/logo-inverse.svg" alt="logo" />
                ) : (
                  <img src="/congress_logo.svg" alt="logo" />
                )}
              </a>
              <LanguageDropdown />
            </div>
            <nav className="flex items-center gap-6">
              {activeLang.value === "ru"
                ? languages.russian.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      className="font-[450] -tracking-[2%] text-[14px] inline-block py-3 hover:text-onAnySurfaceVariant transition-all duration-200 ease-in-out cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))
                : languages.english.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      className=" font-[450] -tracking-[2%] text-[14px] inline-block py-3 hover:text-onAnySurfaceVariant transition-all duration-200 ease-in-out cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
            </nav>
          </div>
        </Container>
      </header>

      <header className="py-3 container sm:hidden bg-white flex items-center justify-between">
        <div className="w-[108px] h-6">
          <img
            src="/logo-inverse.svg"
            alt="logo"
            className="size-full object-contain"
          />
        </div>

        <img src="/burger.svg" alt="" onClick={() => setBurger(true)} />
      </header>
    </>
  );
};

export default Header;
