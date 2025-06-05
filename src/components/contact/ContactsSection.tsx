import ContactForm from "./ContactForm";
import Container from "../global/Container";
import { useTranslation } from "react-i18next";

const ContactsSection = () => {
  const { t } = useTranslation("home");

  const { title, text, venue } = t("contact", { returnObjects: true }) as {
    title: string;
    text: string;
    venue: string;
  };

  return (
    <section className="contact bg-surfaceContainer py-4 sm:py-[64px]">
      <Container>
        <div className="flex flex-col sm:gap-8 gap-4">
          <h2 className="font-64-regular sm:text-left text-center">{title} </h2>
          <div className="flex sm:flex-row flex-col sm:text-left text-center justify-between gap-6">
            <div className="flex flex-col gap-10 max-w-[527px] w-full">
              <p className="font-18-regular text-onAnySurfaceVariant">
                {text}{" "}
              </p>
              <div className="flex flex-col sm:items-start items-center gap-4 sm:mx-0 mx-auto">
                <div className="flex items-center gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7429 21.5854 13.7871 20.5339 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.50025 10.2411 2.44854 7.27101 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23622 4.68023 9.47105 5.62293 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3771 14.529 19.3198 14.7638 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z"
                      stroke="#CFD3D4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sm:font-16-regular font-12-regular">
                    +993 71 87 18 14
                  </span>
                </div>
                <div className="flex sm:items-start items-center gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                      stroke="#CFD3D4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                      stroke="#CFD3D4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <a
                    href="mailto:medina.atdayeva@turkmencongress.com"
                    className="sm:font-16-regular font-12-regular"
                  >
                    medina.atdayeva@turkmencongress.com
                  </a>
                </div>
                <div className="flex sm:items-start items-center gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                      stroke="#CFD3D4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#CFD3D4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="sm:font-16-regular font-12-regular md:!text-left sm:w-[300px] w-[220px]">
                    {venue}
                  </span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactsSection;
