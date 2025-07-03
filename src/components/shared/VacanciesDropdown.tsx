import { FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  content: {
    title: string;
    text?: string;
    list?: string[];
  }[];
  footer: string;
}

export const VacanciesDropdown: FC<Props> = ({
  className,
  title,
  subtitle,
  content,
  footer,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "border-b border-onAnySurfaceVariant pb-4 overflow-hidden",
        className
      )}
    >
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-between p-4 cursor-pointer"
      >
        <div>
          <h2 className="text-white text-2xl mb-3">{title}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>

        <ChevronDown color="#fff" />
      </div>

      <AnimatePresence>
        {isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0, gap: 24 }}
            animate={{
              height: "fit-content",
              opacity: 1,
              marginTop: 16,
              gap: 12,
            }}
            exit={{ height: 0, opacity: 0, marginTop: 0, gap: 24 }}
            className="flex flex-col px-4"
          >
            {content.map((item, i) => (
              <div key={i} className="">
                <h3 className="text-white text-xl mb-3">{item.title}</h3>
                {item.text && <p>{item.text}</p>}
                {item.list && (
                  <ul className="list-disc ml-6">
                    {item.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div
              className="bg-surfaceContainer vacancies-footer text-sm p-4 rounded-[4px] text-white"
              dangerouslySetInnerHTML={{ __html: footer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
