export interface LanguageItem {
  name: string;
  link: string;
}

export interface Language {
  value: string;
  view: string;
  items: LanguageItem[];
}

export interface Languages {
  russian: Language;
  english: Language;
  turkmen: Language;
}

export const languages: Languages = {
  russian: {
    value: 'ru',
    view: 'Русский',
    items: [
      {
        name: 'We offer',
        link: '#services',
      },
      {
        name: 'Who we are',
        link: '#about',
      },
      {
        name: 'Contact us',
        link: '#contact',
      },
    ],
  },
  english: {
    value: 'en',
    view: 'English',
    items: [
      {
        name: 'We offer',
        link: '#services',
      },
      {
        name: 'Who we are',
        link: '#about',
      },
      {
        name: 'Contact us',
        link: '#contact',
      },
    ],
  },
  turkmen: {
    value: 'tm',
    view: 'Türkmen',
    items: [
      {
        name: 'We offer',
        link: '#services',
      },
      {
        name: 'Who we are',
        link: '#about',
      },
      {
        name: 'Contact us',
        link: '#contact',
      },
    ],
  },
};
