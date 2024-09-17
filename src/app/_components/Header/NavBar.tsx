import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import AirTableLogo from "~/app/_components/Icon/AirTableLogo";
import Link from "next/link";
import { pageRoutes } from "~/constants/pageRoutes";
import AirTableTextLogo from "~/app/_components/Icon/AirTableTextLogo";
import Breadcrumb from "~/app/_components/Header/Breadcrumb";

const NavBar: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <nav className={`grid grid-cols-[auto,1fr] gap-8 ${className}`}>
      {/* logo */}
      <Link href={pageRoutes.HOME} className={`flex my-[22px]`}>
        <div className={`h-8 flex-shrink-0`}>
          <AirTableLogo/>
        </div>
        <div className={`flex items-center pl-1`}>
          <AirTableTextLogo/>
        </div>
      </Link>

      <Breadcrumb className={`hidden md2:flex`}/>
    </nav>
  );
};

export default NavBar;
