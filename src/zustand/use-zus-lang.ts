import { create } from "zustand";

interface Store {
  activeLang: {
    view: string;
    value: string;
  };
  setActiveLang: (value: { view: string; value: string }) => void;
}

export const useZusLang = create<Store>((set) => ({
  activeLang: {
    view: "English",
    value: "en",
  },
  setActiveLang: (value) =>
    set((state) => ({ activeLang: (state.activeLang = value) })),
}));
