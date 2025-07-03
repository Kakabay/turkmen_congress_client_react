import Container from "../global/Container";
import LanguageDropdown from "./LanguageDropdown";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Burger from "./Burger";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";

const Header = () => {
  const [scrollY, setScrollY] = useState(false);
  const [burger, setBurger] = useState(false);
  const lenis = useLenis();

  const handleScroll = () => {
    setScrollY(window.scrollY > 20 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation("home");

  const { items } = t("header", { returnObjects: true }) as {
    items: { text: string; link: string }[];
  };

  return (
    <>
      <AnimatePresence>
        {burger && <Burger active={burger} setActive={setBurger} />}
      </AnimatePresence>

      <header
        className={cn(
          "fixed w-full hidden sm:block z-[50] top-0 left-0 right-0 transition-all duration-200 ease-in-out",
          {
            "bg-transparent text-onAnySurface": !scrollY,
            "bg-backgroundInverse  text-onAnySurfaceInverse": scrollY,
          }
        )}
      >
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-8">
              <Link to="/" className="">
                {scrollY ? (
                  <img src="/logo-inverse.svg" alt="logo" />
                ) : (
                  <img src="/congress_logo.svg" alt="logo" />
                )}
              </Link>
              <LanguageDropdown />
            </div>
            <nav className="flex items-center gap-6">
              {items?.map((item, i) => (
                <Link
                  onClick={() =>
                    item.link === "/#contact" ? lenis?.scrollTo("#contact") : {}
                  }
                  target={item.link.includes("http") ? "_blank" : ""}
                  key={i}
                  to={item.link}
                  className="font-[450] -tracking-[2%] text-[14px] inline-block py-3 hover:text-onAnySurfaceVariant transition-all duration-200 ease-in-out cursor-pointer"
                >
                  {item.text}
                </Link>
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
