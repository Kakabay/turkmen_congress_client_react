import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  text: string;
  even?: boolean;
  image: string;
  logo: string;
}

export const PartnerCard: FC<Props> = ({
  className,
  text,
  even = false,
  image,
  logo,
}) => {
  console.log(even);
  return (
    <div
      className={cn(
        "flex justify-center items-center pb-8 gap-40",
        !even && "flex-row-reverse",
        className
      )}
    >
      <div className="rounded-[4px] overflow-hidden w-[369px] h-[260px]">
        <img
          src={image}
          alt=""
          className="rounded-[4px] w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="">
          <img src={logo} alt="nelsonsmith" />
        </div>
        <p className="font-18-regular max-w-[628px] w-full text-onAnySurfaceVariant">
          {text}
        </p>
      </div>
    </div>
  );
};
