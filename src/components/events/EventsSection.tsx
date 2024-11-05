import React from 'react';
import Container from '../global/Container';

const EventsSection = () => {
  return (
    <section className="events" id="events">
      <Container>
        <div className="flex flex-col gap-[38px]">
          <h2 className="font-64-regular">Upcoming event</h2>
          <div className="bg-surfaceContainerLow p-8 rounded-sm border border-surfaceContainerLowOutline flex justify-between gap-8">
            <div className=" flex flex-col  w-full justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-14-medium">Global forum</span>
                <h3 className="mb-2 font-36-medium">
                  Commercial, Investment and Business pportunities in Turkmenistan 2024
                </h3>
                <span className="font-20-medium">7-8 November 2024 - Abu Dhabi, UAE</span>
              </div>
              <div className="flex w-full justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="font-14-regular text-onAnySurfaceVariant">Organizers:</span>
                  <div className="h-[64px] w-[221px]">
                    <img src="/organizers.png" alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[203px]">
                  <span className="font-14-regular text-onAnySurfaceVariant">Co-organizer:</span>
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
      </Container>
    </section>
  );
};

export default EventsSection;
