import React from "react";
import RainbowLink from "~/app/_components/Btn/RainbowLink";
import { pageRoutes } from "~/constants/pageRoutes";
import PrimaryBtn from "~/app/_components/Btn/PrimaryBtn";
import SecondaryBtn from "~/app/_components/Btn/SecondaryBtn";

const MainHeroBanner = () => {
  return (
    <div className={`relative h-full w-full overflow-y-hidden`}>
      <div className={`absolute w-full h-screen bg-homepage-blue overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/*<img*/}
        {/*  src={`/homepage-blue-bg.webp`}*/}
        {/*  alt={`bg`}*/}
        {/*  className={`absolute top-0 left-0 w-full h-full object-fill`}*/}
        {/*/>*/}
      </div>

      <div className={`relative mx-12 h-auto py-24`}>
        <div className={`grid grid-cols-12 gap-6`}>
          <div className={`col-start-1 col-end-7 md2:col-end-6`}>
            <div className={`flex flex-col gap-9 h-full items-center justify-center`}>
              <div className={``}>
                <span>
                  <RainbowLink href={pageRoutes.CO_BUILDER} />
                </span>
                <h1 className={`text-[64px] leading-[1.15] text-[#1a3866] font-medium`}>The fastest way to build apps</h1>
                <div className={`mt-2`}>
                  <p className={`text-lg font-medium text-at-btn-primary-hover`}>Empower the people closest to the work to transform business processes.</p>
                </div>
              </div>

              {/* btn group*/}
              <div className={`flex w-full items-start gap-3 md:gap-4 flex-row flex-wrap`}>
                <PrimaryBtn className={`min-w-[200px] py-[8px] px-3.5`}>
                  <p className={`font-medium text-lg text-white`}>Sign up for free</p>
                </PrimaryBtn>
                <SecondaryBtn className={`min-w-[200px] py-[8px] px-3.5`}>
                  <p className={`font-medium text-lg`}>Contact Sales</p>
                </SecondaryBtn>
              </div>
            </div>
          </div>

          <div className={`relative flex items-center justify-center col-start-7 md2:col-start-6 col-end-13`}>
            <div className={`min-w-full`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/homepage-hero.webp"
                alt="hero"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroBanner;