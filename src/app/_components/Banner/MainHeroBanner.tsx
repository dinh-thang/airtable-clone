import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbArrow from "~/app/_components/Icon/BreadcrumbArrow";

const MainHeroBanner = () => {
  return (
    <div className={`relative h-full w-full overflow-y-hidden`}>
      <Image
        src={`/Homepage_Blue_BG.jpeg`}
        alt={`bg`}
        layout="fill"
        objectFit={`cover`}
        className="absolute left-0 top-0 h-full w-full"
      />

      <div className={`relative mx-6 h-auto`}>
        <div className={`grid grid-rows-[auto,1fr] gap-8 py-8`}>
          <div className={`flex flex-col`}>
            <Link href={``} >
              <p>Build apps instantly with AI</p>
              <BreadcrumbArrow/>
            </Link>

            <h1 className={`text-5xl text-at-btn-primary-active font-medium`}>The fastest way to build apps</h1>

            <p>Empower the people closest to the work to transform business processes.</p>
          </div>

          <div className={`row-start-2`}>
            {/*<Image*/}
            {/*  src={`/Homepage-Hero.jpeg`}*/}
            {/*  alt={`hero`}*/}
            {/*  layout="fill"*/}
            {/*  objectFit={`cover`}*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroBanner;