import React from "react";
import Image from "next/image";

const MainHeroBanner = () => {
  return (
    <div className={`relative h-full w-full overflow-x-hidden`}>
      <Image
        src={`/Homepage_Blue_BG.jpeg`}
        alt={`bg`}
        layout="fill"
        objectFit={`cover`}
      />

      <div className={`mx-12 py-[96px]`}>
        
      </div>
    </div>
  );
};

export default MainHeroBanner;