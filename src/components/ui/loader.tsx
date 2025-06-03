import { FC } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full flex justify-center", className)}>
      <Loader2 className="bg-gold animate-spin size-14" />
    </div>
  );
};
