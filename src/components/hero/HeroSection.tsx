import React from 'react';
import Container from '../global/Container';

const HeroSection = () => {
  return (
    <section className="hero bg-hero-img w-full h-[996px]" id="hero">
      <Container>
        <div className="h-[996px] w-full relative flex flex-col justify-end pb-2 gap-2">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[848px] w-full font-80-medium">
            Professional events with a personal touch
          </h1>
          <div className="flex w-full justify-between items-end">
            <span className="font-14-regular">Turkmenistan, Ashgabat</span>
            <span className="font-18-regular">
              Make your event: Innovative technologies, creative formats.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4C12.5523 4 13 4.44772 13 5V16.5858L18.2929 11.2929C18.6834 10.9024 19.3166 10.9024 19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z"
                fill="#AAB8BD"
              />
            </svg>
            <span className="text-onAnySurfaceVariant text-[12px] font-medium">
              Click here or scroll down
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
