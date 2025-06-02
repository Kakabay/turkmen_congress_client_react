import { FC } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useZusLang } from "@/zustand/use-zus-lang";

interface Props {
  className?: string;
  cat: string;
  title: string;
  date: string;
  image: string;
  i: number;
}

export const EventCard: FC<Props> = ({
  className,
  cat,
  title,
  date,
  image,
  i,
}) => {
  const { t } = useTranslation("home");
  const value = useZusLang((state) => state.activeLang.value);

  const { organizersTitle, coOrganizersTitle } = t("events", {
    returnObjects: true,
  }) as { organizersTitle: string; coOrganizersTitle: string };

  return (
    <>
      <article
        className={cn(
          "bg-surfaceContainerLow p-8 rounded-sm border border-surfaceContainerLowOutline flex justify-between gap-8",
          className
        )}
      >
        <div className="flex flex-col  w-full justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-14-medium">{cat}</span>
            <h3 className="mb-2 font-36-medium">{title}</h3>
            <span className="font-20-medium">{date}</span>
          </div>
          <div className="flex w-full justify-between items-end">
            <div className="flex flex-col gap-1">
              <span className="font-14-regular text-onAnySurfaceVariant">
                {organizersTitle}
              </span>
              {i === 0 ? (
                <div className="size-[64px]">
                  <img
                    src="/events/organizer-1.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="h-[64px] w-[221px]">
                  <img
                    src="/organizers.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 w-[203px]">
              <span className="font-14-regular text-onAnySurfaceVariant">
                {coOrganizersTitle}
              </span>
              <div className="w-[173px] h-[64px]">
                <img
                  src="/congress_logo.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[480px] max-h-[270px] h-full w-full rounded-[2px] overflow-hidden relative">
          <img
            src={image}
            alt=""
            className="rounded-[2px] size-full object-contain"
          />
          <div className="absolute top-2.5 right-2 rounded-full bg-surfaceContainerLow text-sm px-2 py-0.5 text-onAnySurfaceVariant font-medium">
            {value === "ru" ? "Статус: Завершено" : "Status: Completed"}
          </div>
        </div>
      </article>

      <div className="bg-surfaceContainerLow sm:hidden flex p-4 rounded-sm border border-surfaceContainerLowOutline flex-col justify-between gap-6">
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-14-medium">{cat}</span>
            <h3 className="mb-2 font-36-medium">{title}</h3>
            <span className="font-20-medium">{date}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-14-regular text-onAnySurfaceVariant">
              {organizersTitle}
            </span>
            <div className="h-[64px] w-[221px]">
              <img
                src="/organizers.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[203px]">
            <span className="font-14-regular text-onAnySurfaceVariant">
              {coOrganizersTitle}
            </span>
            <div className="w-[173px] h-[64px]">
              <img
                src="/congress_logo.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[480px] max-h-[270px] h-full w-full mt-2 rounded-[2px] overflow-hidden">
          <img
            src={image}
            alt=""
            className="rounded-[2px] w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};
