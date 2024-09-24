"use client"

import React from "react";
import MainHamMenu from "~/app/_components/Icon/Main/MainHamMenu";
import AirTableMainLogo from "~/app/_components/Icon/Main/AirTableMainLogo";
import Link from "next/link";
import { pageRoutes } from "~/constants/pageRoutes";
import SearchBox from "~/app/_components/Form/SearchBox";
import QuestionMarkIcon from "~/app/_components/Icon/QuestionMarkIcon";
import NotificationIcon from "~/app/_components/Icon/NotificationIcon";
import { useSession } from "next-auth/react";
import UserProfileIcon from "~/app/_components/Icon/Main/UserProfileIcon";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const MainHeaderBar: React.FC<BaseComponentProps> = ({ className }) => {
  const [searchVal, setSearchVal] = React.useState("");
  const { data } = useSession();

  return (
    <header className={`flex w-full items-center shadow-at-main-nav h-14 bg-white ${className}`}>
      <nav className={`flex w-full justify-between pl-2 pr-4`}>
        {/* logo div */}
        <div className={`flex flex-1 w-full`}>
          <div className={`flex pl-1 pr-2 items-center`}>
            {/* TODO: pop up side menu*/}
            <button>
              <MainHamMenu className={`hover:opacity-100`} />
            </button>
          </div>
          <Link href={pageRoutes.MAIN} className={`p-3 mr-1`}>
            <AirTableMainLogo/>
          </Link>
        </div>

        {/* search box */}
        <div className={`flex justify-center w-[354px]`}>
          <SearchBox id={`search-box`} value={searchVal} placeholder={`Search...`} />
        </div>

        {/* action group */}
        <div className={`flex flex-1 items-center justify-end`}>
          <div className={`flex cursor-pointer flex-row px-3 h-7 rounded-full items-center hover:bg-black/10`}>
            <QuestionMarkIcon/>
            <span className={`text-[13px] ml-1 text-at-half-black/80`}>Help</span>
          </div>

          <div className={`flex items-center mx-3 h-7 shadow-at-main-nav rounded-full`}>
            <div className={`flex items-center cursor-pointer justify-center w-7`}>
              <NotificationIcon/>
            </div>
          </div>

          {/* profile img */}
          <div className={`h-7 flex items-center ml-2 justify-center`}>
            {data?.user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className={`cursor-pointer rounded-full w-7 h-7`} src={data?.user?.image} alt={``}/>
            ) : (
             <UserProfileIcon/>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeaderBar;