import Container from "../global/Container";
import { Team } from "../team/Team";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation("home");

  const { title, texts } = t("about", { returnObjects: true }) as {
    title: string;
    texts: string[];
  };

  return (
    <section className="about">
      <Container>
        <div className="flex flex-col md:gap-8 gap-4 mb-16">
          <h2 className="md:font-64-regular font-36-medium">{title} </h2>
          <div className="flex md:flex-row md:gap-8 flex-col gap-4">
            {texts.map((item, i) => (
              <p
                key={i}
                className="md:font-18-regular font-14-regular !text-onAnySurfaceVariant"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <Team />
      </Container>
    </section>
  );
};

export default AboutSection;
