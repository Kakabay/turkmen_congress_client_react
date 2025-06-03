import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  name: string;
  image: { path: string };
  job_title: string;
  biography: string;
}

export const TeamCard: FC<Props> = ({
  className,
  name,
  job_title,
  image,
  biography,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation("home");

  const bioBtn = t("about.team.button");

  return (
    <motion.article
      className={cn(
        "bg-surfaceContainerLow size-fit transition-all border-surfaceContainerLowOutline border rounded overflow-hidden",
        className
      )}
    >
      <div className="size-auto">
        <img src={image?.path} alt={name} className="size-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-3xl mb-1 text-white">{name}</h3>
        <h4 className="text-sm mb-4">{job_title}</h4>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2"
        >
          {bioBtn}
          <ChevronDown
            className={cn(
              "transition-transform duration-300",
              isCollapsed && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {isCollapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0, gap: 12 }}
              animate={{
                height: "fit-content",
                opacity: 1,
                marginTop: 16,
                gap: 12,
              }}
              exit={{ height: 0, opacity: 0, marginTop: 0, gap: 12 }}
              className="flex flex-col w-fit"
              dangerouslySetInnerHTML={{ __html: biography ?? "" }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};
