import Container from "../global/Container";
import { useTranslation } from "react-i18next";
import { PartnerCard } from "./PartnerCard";
import { cn } from "@/lib/utils";

const PartnersSection = () => {
  const { t } = useTranslation("home");

  const { title, items } = t("partners", { returnObjects: true }) as {
    title: string;
    items: {
      text: string;
    }[];
  };

  return (
    <section className="about">
      <Container>
        <div className="sm:flex hidden flex-col gap-8">
          <h2 className="font-64-regular">{title}</h2>

          <div className={cn("flex flex-col gap-20")}>
            {items.map(({ text }, i) => (
              <>
                <PartnerCard
                  image={`/partners/${i + 1}.png`}
                  logo={`/partners/logo-${i + 1}.svg`}
                  key={i}
                  text={text}
                  even={i % 2 === 0}
                />

                {i + 1 !== items.length && <hr className="border-outline" />}
              </>
            ))}
          </div>
        </div>

        <div className="sm:hidden flex flex-col gap-8">
          <h2 className="font-64-regular">General partner —</h2>
          <img src="/nelson.svg" alt="nelsonsmith" />

          <p className="font-14-regular text-onAnySurfaceVariant">
            Nielsonsmith is a highly specialised trade compliance focused
            international organisation, working closely with the compliance
            community to create assemblies that are produced through co
            operation with senior executives and leading analysts, to provide
            real insight and form a single point for the industry to meet, share
            ideas and experiences on a neutral platform. We are the compliance
            conference company.
          </p>

          <img
            src="/partners.png"
            alt=""
            className="rounded-[4px] w-full h-auto object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
