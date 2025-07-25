import { FC } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  type: string;
  name: string;
  date: string;
  banner_image: { path: string };
  status: string;
  organizers_image: { path: string }[];
  co_organizer_image: { path: string };
}

export const EventCard: FC<Props> = ({
  className,
  type,
  name,
  date,
  banner_image,
  status,
  organizers_image,
  co_organizer_image,
}) => {
  const { t } = useTranslation("home");

  const { organizersTitle, coOrganizersTitle } = t("events", {
    returnObjects: true,
  }) as { organizersTitle: string; coOrganizersTitle: string };

  return (
    <>
      <article
        className={cn(
          "bg-surfaceContainerLow p-8 rounded-sm border border-surfaceContainerLowOutline hidden sm:flex justify-between gap-8",
          className
        )}
      >
        <div className="flex flex-col  w-full justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-14-medium">{type}</span>
            <h3 className="mb-2 font-36-medium">{name}</h3>
            <span className="font-20-medium">{date}</span>
          </div>
          <div className="flex  w-full justify-between ">
            <div className="flex flex-col gap-1">
              <span className="font-14-regular text-onAnySurfaceVariant">
                {organizersTitle}
              </span>
              <div className="flex items-center gap-2">
                {organizers_image?.map((item, i) => (
                  <img
                    key={i}
                    src={item?.path}
                    alt=""
                    className="h-16 w-fit object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[203px] justify-start">
              <span className="font-14-regular text-onAnySurfaceVariant">
                {coOrganizersTitle}
              </span>
              <div className="h-12 w-fit">
                <img
                  src={co_organizer_image?.path}
                  alt=""
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[480px] max-h-[270px] h-full w-full rounded-[2px] overflow-hidden relative">
          <img
            src={banner_image?.path}
            alt={name}
            className="rounded-[2px] size-full object-contain"
          />
          <div
            className={cn(
              "absolute top-2.5 right-2 rounded-full  text-sm px-2 py-0.5  font-medium",
              status.toLowerCase().includes("soon")
                ? "bg-gold text-white"
                : "bg-surfaceContainerLow text-onAnySurfaceVariant"
            )}
          >
            {status}
          </div>
        </div>
      </article>

      <div className="bg-surfaceContainerLow sm:hidden flex p-4 rounded-sm border border-surfaceContainerLowOutline flex-col justify-between gap-6">
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-14-medium">{type}</span>
            <h3 className="mb-2 font-36-medium">{name}</h3>
            <span className="font-20-medium">{date}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-14-regular text-onAnySurfaceVariant">
              {organizersTitle}
            </span>
            <div className="h-[64px] flex w-[221px]">
              {organizers_image?.map((item, i) => (
                <img
                  key={i}
                  src={item?.path}
                  className="w-full h-full object-contain"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[203px]">
            <span className="font-14-regular text-onAnySurfaceVariant">
              {coOrganizersTitle}
            </span>
            <div className="size-16">
              <img
                src={co_organizer_image?.path}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[480px] max-h-[270px] h-full w-full mt-2 rounded-[2px] overflow-hidden">
          <img
            src={banner_image?.path}
            alt=""
            className="rounded-[2px] w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};
