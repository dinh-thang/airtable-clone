import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import AirTableLogo from "~/app/_components/Icon/AirTableLogo";
import Link from "next/link";
import { pageRoutes } from "~/constants/pageRoutes";
import AirTableTextLogo from "~/app/_components/Icon/AirTableTextLogo";

const NavBar: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <nav className={`${className}`}>
      <Link href={pageRoutes.HOME} className={`flex my-[22px]`}>
        <div className={`h-8`}>
          <AirTableLogo/>
        </div>
        <div className={`flex items-center pl-1`}>
          <AirTableTextLogo/>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
