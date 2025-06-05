import Container from "../global/Container";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("home");

  return (
    <footer className="sm:py-[64px] pt-4 pb-8">
      <Container>
        <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
          <div className="">
            <img src="/congress_logo.svg" alt="logo" />
          </div>

          <span className="sm:font-18-regular font-14-regular text-onAnySurfaceVariant">
            {t("footer")}
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
