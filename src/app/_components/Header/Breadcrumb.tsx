import React from "react";
import { pageRoutes } from "~/constants/pageRoutes";
import BlueHoverBtn from "~/app/_components/Btn/BlueHoverBtn";
import BreadcrumbArrow from "~/app/_components/Icon/BreadcrumbArrow";
import BlueHoverLink from "~/app/_components/Link/BlueHoverLink";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const Breadcrumb: React.FC<BaseComponentProps> = ({ className }) => {
  const lg = "lg:text-base"

  return (
    <div className={`flex flex-row ${className}`}>
      <div className={`flex flex-row items-center`}>
        <BlueHoverBtn className={`font-medium text-[13px] ${lg}`}>Platform</BlueHoverBtn>
        <BreadcrumbArrow className={`ml-1`}/>
      </div>

      <div className={`flex flex-row items-center ml-[22px]`}>
        <BlueHoverBtn className={`font-medium text-[13px] ${lg}`}>Solutions</BlueHoverBtn>
        <BreadcrumbArrow className={`ml-1`}/>
      </div>

      <div className={`flex flex-row items-center ml-[22px]`}>
        <BlueHoverBtn className={`font-medium text-[13px] ${lg}`}>Resources</BlueHoverBtn>
        <BreadcrumbArrow className={`ml-1`}/>
      </div>

      <div className={`flex flex-row items-center ml-[22px]`}>
        <BlueHoverLink href={pageRoutes.PRICING} className={`font-medium text-[13px] ${lg}`}>Pricing</BlueHoverLink>
      </div>
    </div>
  );
};

export default Breadcrumb;