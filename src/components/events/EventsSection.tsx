import { useZusLang } from '@/zustand/use-zus-lang';
import Container from '../global/Container';
import { sectionsTranslations } from '@/lib/constants';

const EventsSection = () => {
  const activeLang = useZusLang().activeLang;

  return (
    <section className="events" id="events">
      <Container>
        <div className="sm:flex hidden flex-col gap-[38px]">
          <h2 className="font-64-regular">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.upcomingEvent.sectionTitle
              : sectionsTranslations.en.upcomingEvent.sectionTitle}
          </h2>
          <div className="bg-surfaceContainerLow p-8 rounded-sm border border-surfaceContainerLowOutline flex justify-between gap-8">
            <div className=" flex flex-col  w-full justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-14-medium">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.eventSubtitle
                    : sectionsTranslations.en.upcomingEvent.eventSubtitle}
                </span>
                <h3 className="mb-2 font-36-medium">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.eventTitle
                    : sectionsTranslations.en.upcomingEvent.eventTitle}
                </h3>
                <span className="font-20-medium">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.eventDateLocation
                    : sectionsTranslations.en.upcomingEvent.eventDateLocation}
                </span>
              </div>
              <div className="flex w-full justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="font-14-regular text-onAnySurfaceVariant">
                    {activeLang.value === 'ru'
                      ? sectionsTranslations.ru.upcomingEvent.organizers
                      : sectionsTranslations.en.upcomingEvent.organizers}
                  </span>
                  <div className="h-[64px] w-[221px]">
                    <img src="/organizers.png" alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[203px]">
                  <span className="font-14-regular text-onAnySurfaceVariant">
                    {activeLang.value === 'ru'
                      ? sectionsTranslations.ru.upcomingEvent.coOrganizres
                      : sectionsTranslations.en.upcomingEvent.coOrganizres}
                  </span>
                  <div className="w-[173px] h-[64px]">
                    <img src="/congress_logo.svg" alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[480px] max-h-[270px] h-full w-full rounded-[2px] overflow-hidden">
              <img src="/card.jpg" alt="" className="rounded-[2px] w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex sm:hidden flex-col gap-4">
          <h2 className="font-64-regular">
            {activeLang.value === 'ru'
              ? sectionsTranslations.ru.upcomingEvent.sectionTitle
              : sectionsTranslations.en.upcomingEvent.sectionTitle}
          </h2>
          <div className="bg-surfaceContainerLow p-4 rounded-sm border border-surfaceContainerLowOutline flex flex-col justify-between gap-6">
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-14-medium">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.eventSubtitle
                    : sectionsTranslations.en.upcomingEvent.eventSubtitle}
                </span>
                <h3 className="mb-2 font-36-medium">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.eventTitle
                    : sectionsTranslations.en.upcomingEvent.eventTitle}
                </h3>
                <span className="font-20-medium">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.eventDateLocation
                    : sectionsTranslations.en.upcomingEvent.eventDateLocation}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-14-regular text-onAnySurfaceVariant">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.organizers
                    : sectionsTranslations.en.upcomingEvent.organizers}
                </span>
                <div className="h-[64px] w-[221px]">
                  <img src="/organizers.png" alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-[203px]">
                <span className="font-14-regular text-onAnySurfaceVariant">
                  {activeLang.value === 'ru'
                    ? sectionsTranslations.ru.upcomingEvent.coOrganizres
                    : sectionsTranslations.en.upcomingEvent.coOrganizres}
                </span>
                <div className="w-[173px] h-[64px]">
                  <img src="/congress_logo.svg" alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            <div className="max-w-[480px] max-h-[270px] h-full w-full mt-2 rounded-[2px] overflow-hidden">
              <img src="/card.jpg" alt="" className="rounded-[2px] w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
