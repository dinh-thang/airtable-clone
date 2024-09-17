import React from "react";
import LandingPageTopBanner from "~/app/_components/Banner/LandingPageTopBanner";
import NavBar from "~/app/_components/Header/NavBar";
import HeaderActionGroup from "~/app/_components/Header/HeaderActionGroup";

const HeaderBar = () => {
  return (
    <header className={`sticky top-0 z-50 bg-white grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]`}>
      <LandingPageTopBanner className={`col-start-1 col-span-7 row-start-1 auto-rows-auto`}>
        <p className={`text-sm text-at-banner-text-gray`}>✨ Use AI to spin up transformative apps instantly.</p>
      </LandingPageTopBanner>

      <NavBar className={`col-start-1 col-span-2 row-start-2 px-8`} />

      {/* action group */}
      <HeaderActionGroup className={`ml-0 row-start-2 col-end-8`} />
    </header>
  );
};

export default HeaderBar;