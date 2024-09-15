import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import PrimaryBtn from "~/app/_components/Btn/PrimaryBtn";
import HamMenu from "~/app/_components/Menu/HamMenu";
import { pageRoutes } from "~/constants/pageRoutes";
import Link from "next/link";

const HeaderActionGroup: React.FC<BaseComponentProps> = ({ className }) => {
  const sm = ""
  const md = ""
  const lg = ""

  return (
    <div className={`flex flex-row items-center justify-end mx-6 my-[22px] ${className}`}>
      <PrimaryBtn className={`md:hidden`}>
        <p>Sign up</p>
      </PrimaryBtn>

      <PrimaryBtn className={`hidden md:block`}>
        <p>Sign up for free</p>
      </PrimaryBtn>

      <Link href={pageRoutes.LOGIN} className={`hover:bg-[#0f306a]/5 ml-4 transition-colors ease-in-out duration-200`}>
        <p className={`text-lg font-medium`}>Sign in</p>
      </Link>

      <HamMenu className={`ml-4`}/>
    </div>
  );
};

export default HeaderActionGroup;