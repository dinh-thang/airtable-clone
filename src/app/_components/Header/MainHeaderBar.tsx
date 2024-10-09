"use client"

import React, { useEffect, useState } from "react";
import MainHamMenu from "~/app/_components/Icon/Main/MainHamMenu";
import AirTableMainLogo from "~/app/_components/Icon/Main/AirTableMainLogo";
import Link from "next/link";
import { pageRoutes } from "~/constants/pageRoutes";
import SearchBox from "~/app/_components/Form/SearchBox";
import QuestionMarkIcon from "~/app/_components/Icon/QuestionMarkIcon";
import NotificationIcon from "~/app/_components/Icon/NotificationIcon";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import { useSession } from "next-auth/react";

const MainHeaderBar: React.FC<BaseComponentProps> = ({ className }) => {
  const { data } = useSession();

  const [searchVal, setSearchVal] = useState("");
  const [profileSelected, setProfileSelected] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (!data) return;
    if (!data.user) return;
    if (!data.user.image) return;

    setImage(data.user.image);
  }, [data]);

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
          <div onClick={() => setProfileSelected(!profileSelected)} className={`h-7 relative flex items-center ml-2 justify-center`}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img className={`cursor-pointer rounded-full w-7 h-7`} src={image} alt={``}/>
          </div>

          {profileSelected ?? (
            <div className={`fixed top-full left-0 bg-blue-500`}>
              opend
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainHeaderBar;