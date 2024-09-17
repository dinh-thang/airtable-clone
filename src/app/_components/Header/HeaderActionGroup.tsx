import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import PrimaryBtn from "~/app/_components/Btn/PrimaryBtn";
import HamMenu from "~/app/_components/Menu/HamMenu";
import { pageRoutes } from "~/constants/pageRoutes";
import GrayBgHoverLink from "~/app/_components/Link/GrayBgHoverLink";
import SecondaryBtn from "~/app/_components/Btn/SecondaryBtn";
import BlueHoverLink from "~/app/_components/Link/BlueHoverLink";

const HeaderActionGroup: React.FC<BaseComponentProps> = ({ className }) => {
  const sm = ""
  const md = ""
  const lg = ""

  return (
    <div className={`flex flex-row items-center justify-end mx-6 my-[22px] ${className}`}>
      <SecondaryBtn className={`hidden md2:block`}>
        <p className={`text-lg md2:text-[13px] lg:text-base`}>Contact Sales</p>
      </SecondaryBtn>

      <PrimaryBtn className={`ml-4`}>
        <p className={`md:hidden`}>Sign up</p>
        <p className={`hidden md:block text-base md2:text-[13px] lg:text-base`}>Sign up for free</p>
      </PrimaryBtn>

      <GrayBgHoverLink href={pageRoutes.LOGIN} className={`hidden md:block md2:hidden ml-4`}>
        <p className={`text-lg md2:text-[13px] lg:text-base font-medium`}>Sign in</p>
      </GrayBgHoverLink>

      <BlueHoverLink href={pageRoutes.LOGIN} className={`hidden md2:block ml-4`}>
        <p className={`text-[13px] lg:text-base font-medium`}>Sign in</p>
      </BlueHoverLink>

      <HamMenu className={`ml-4 md2:ml-0 md2:hidden`}/>
    </div>
  );
};

export default HeaderActionGroup;