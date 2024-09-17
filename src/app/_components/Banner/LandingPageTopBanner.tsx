import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import Link from "next/link";
import ArrowHeadBanner from "~/app/_components/Icon/ArrowHeadBanner";

const LandingPageTopBanner: React.FC<BaseComponentProps> = ({ children, className }) => {
  const sm = "py-3 px-6 flex flex-col"
  const md = "md:py-3 md:px-8 md:flex md:flex-row md:items-center md:justify-center"
  const lg = ""
  
  return (
    <div className={`bg-promo-banner ${sm} ${md} lg:${lg} ${className}`}>
      {children}

      <span className={`inline-block leading-at-p mt-2 md:mt-0 md:mx-2`}>
        <Link className={`flex items-center`} href={"/platform/app-building"}>
          <span className={`block leading-at-p hover:text-at-btn-primary/70 hover:underline text-at-btn-primary text-sm font-medium transition-colors ease-in-out`}>
            Learn more
          </span>
          <ArrowHeadBanner className={`inline ml-1 fill-at-btn-primary`} />
        </Link>
      </span>
    </div>
  );
};

export default LandingPageTopBanner;