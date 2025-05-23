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
}

export const languages: Languages = {
  russian: {
    value: "ru",
    view: "Русский",
    items: [
      {
        name: "Мы предлагаем",
        link: "#services",
      },
      {
        name: "О нас",
        link: "#about",
      },
      {
        name: "Связаться с нами",
        link: "#contact",
      },
    ],
  },
  english: {
    value: "en",
    view: "English",
    items: [
      {
        name: "We offer",
        link: "#services",
      },
      {
        name: "Who we are",
        link: "#about",
      },
      {
        name: "Contact us",
        link: "#contact",
      },
    ],
  },
};

export const sectionsTranslations = {
  en: {
    hero: {
      title: "Professional events with a personal touch",
      subtitle: "Make your event innovative: technologies, creative formats.",
      venue: "Turkmenistan, Ashgabat",
      moto: "Make your events: Innovative technologies, creativve formats.",
      btn: "Click here or scroll down",
    },
    upcomingEvent: {
      sectionTitle: "Upcoming event",
      eventTitle:
        "Commercial, Investment and Business opportunities in Turkmenistan 2024",
      eventDateLocation: "7-8 November 2024 - Abu Dhabi, UAE",
      eventSubtitle: "Global forum",
      organizers: "Organizers:",
      coOrganizres: "Co-organizer:",
    },
    services: {
      sectionTitle: "We offer...",
      sectionText:
        "...comprehensive services, including venue selection and rental, event decor and technical support, logistics coordination for participants and speakers, event management, media relations, and post-event follow-up.",
      services: [
        {
          img: "/service1.png",
          title: "Event organisation",
          description:
            "Mass events, seminars and conferences, congresses and forums across this country and abroad.",
        },
        {
          img: "/service2.png",
          title: "Hybrid events",
          description:
            "Hybrid conferences, teleconferences, business broadcasts, big events, congresses, and online events.",
        },
        {
          img: "/service1.png",
          title: "Events for business",
          description:
            "Business meetings, corporate trainings and practicals to address issues, enhance brand reputation.",
        },
      ],
    },
    about: {
      sectionTitle: "Who we are",
      texts: [
        "Turkmen Congress opens up new opportunities for clients who appreciate a quality approach to organising business events. Our company is a new but ambitious player in the market, ready to offer a fresh look, unique ideas and a full range of services for organising and conducting conferences, seminars, forums and congresses of any scale and subject matter.",
        "We are confidently orientated in the peculiarities of the Turkmen market and know very well what attracts participants from different countries. Our events comply with international quality standards, but at the same time we take into account all cultural and business nuances that are important for our clients. As a reliable partner for companies, Turkmen Congress provides support at every stage of event organisation. ",
      ],
    },
    partner: {
      sectionTitle: "General partner",
      name: "nielsonsmith",
      description:
        "Nielsonsmith is a highly specialized trade compliance focused international organization, working closely with the compliance community to create specialist events that are produced through cooperation with senior executives and leading analysts, to provide real insight from a single point for the industry to move, share ideas and experiences on a neutral platform. We are the compliance conference company.",
    },
    contact: {
      sectionTitle: "Contact us via our contact form",
      description:
        "Contact with us today to discuss opportunities for collaboration to enhance your event planning — whether through speaking engagements, partnerships, or attending our events.",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitButton: "Submit",
    },
    footer: {
      rights: "2024 © Turkmen Congress. All rights reserved",
    },
  },
  ru: {
    hero: {
      title: "Индивидуальность и профессионализм в каждом мероприятии",
      subtitle:
        "Туркменская конгрессия - ваш надежный партнер в организации мероприятий мирового класса.",
      venue: "Туркменистан, Ашхабад",
      moto: "Turkmen Congress – надежный партнер в организации мероприятий мирового класса.  Наша миссия – открывать новые возможности для Вашего бизнеса.",
      btn: "Нажмите сюда или листайте вниз",
    },
    upcomingEvent: {
      sectionTitle: "Предстоящее событие",
      eventTitle:
        "Коммерческие, инвестиционные и бизнес возможности в Туркменистане",
      eventDateLocation: "7-8 Ноября, 2024 - Абу-Даби, ОАЭ",
      eventSubtitle: "Global forum",
      organizers: "Organizers:",
      coOrganizres: "Co-organizer:",
    },
    services: {
      sectionTitle: "Наши услуги",
      sectionText:
        "Мы берем на себя такие задачи, как подбор и аренда площадки, оформление зала и техническое обеспечение, организация логистики для участников и спикеров, сопровождение мероприятия, работа со СМИ и пост-мероприятие.",
      services: [
        {
          img: "/service1.png",
          title: "Организация мероприятий",
          description:
            "Массовые мероприятия, семинары и конференции, конгрессы и форумы по всей стране и за рубежом.",
        },
        {
          img: "/service2.png",
          title: "Гибридные мероприятия",
          description:
            "Гибридные конференции, телеконференции, бизнес-трансляции, крупные мероприятия, конгрессы и другие события в онлайн-формате.",
        },
        {
          img: "/service3.png",
          title: "Мероприятия для бизнеса",
          description:
            "Деловые встречи, корпоративные тренинги и практические сессии для решения задач и улучшения репутации бренда.",
        },
      ],
    },
    about: {
      sectionTitle: "О нас",
      texts: [
        "Turkmen Congress открывает новые возможности для клиентов, которые ценят качественный подход к организации бизнес мероприятий. Наша компания — новый, но амбициозный игрок на рынке, готовый предложить свежий взгляд, уникальные идеи и полный спектр услуг по организации и проведению конференций, семинаров, форумов и конгрессов любой темы и тематики.",
        "Мы уверенно ориентируемся в особенностях туркменского рынка и прекрасно знаем, что привлекает участников из разных стран. Наши мероприятия соответствуют международным стандартам качества, но в то же время учитывают культурные и деловые нюансы, которые важны для наших клиентов. Надежный партнер для компаний, Turkmen Congress обеспечивает поддержку на каждом этапе организации мероприятий.",
      ],
    },
    partner: {
      sectionTitle: "Основной партнёр",
      name: "nielsonsmith",
      description:
        "Nielsonsmith - это высокоспециализированная международная организация, работающая в тесном контакте с сообществом специалистов по соблюдению нормативно-правовых требований, для создания мероприятий, которые проводятся через сотрудничество с высшим руководством и ведущими аналитиками, чтобы предоставить реальное видение из единой точки для отрасли, чтобы двигаться вперед, делиться идеями и опытом на нейтральной платформе. Мы - компания по проведению конференций по вопросам соответствия.",
    },
    contact: {
      sectionTitle: "Свяжитесь с нами",
      description:
        "Свяжитесь с нами прямо сейчас, чтобы обсудить возможность сотрудничества - будь то выступления, партнерство или участие в наших мероприятиях.",
      namePlaceholder: "Имя",
      emailPlaceholder: "Эл. почта",
      messagePlaceholder: "Сообщение",
      submitButton: "Отправить",
    },
    footer: {
      rights: "2024 © Туркменский Конгресс. Все права защищены",
    },
  },
};
