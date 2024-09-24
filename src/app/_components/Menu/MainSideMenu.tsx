import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import HomeIcon from "~/app/_components/Icon/HomeIcon";
import GroupPeopleIcon from "~/app/_components/Icon/GroupPeopleIcon";

const MainSideMenu: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <div className={`flex flex-col pt-5 border-r-[1px] bg-white h-full w-12 border-black/10 ${className}`}>
      <div className={`flex justify-center mb-5`}>
        <HomeIcon/>
      </div>

      <div className={`flex justify-center mb-5`}>
        <GroupPeopleIcon/>
      </div>

      {/* TODO: underline */}
      <div />
    </div>
  );
};

export default MainSideMenu;