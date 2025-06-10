import { clsx, type ClassValue } from "clsx";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useScrollTop = (devs?: any) => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [devs]);
};
