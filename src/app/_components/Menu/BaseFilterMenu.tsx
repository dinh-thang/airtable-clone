import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import BaseFilterBarArrow from "~/app/_components/Icon/Base/BaseFilterBarArrow";
import MainHamMenu from "~/app/_components/Icon/Main/MainHamMenu";
import MainWindowIcon from "~/app/_components/Icon/Main/MainWindowIcon";

const BaseFilterMenu: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <div className={`flex flex-row flex-nowrap justify-between ${className}`}>
      {/* most left filter options */}
      <div className={`flex flex-row mr-2`}>
        {/* TODO: handle onClick for these filters */}
        <div className={`flex flex-row items-center text-at-half-black/70 hover:text-at-half-black mr-3`}>
          <p className={`mr-1 text-[15px]`}>Opened by you</p>
          <BaseFilterBarArrow />
        </div>
        <div className={`flex flex-row items-center text-at-half-black/70 hover:text-at-half-black`}>
          <p className={`mr-1 text-[15px]`}>Show all types</p>
          <BaseFilterBarArrow />
        </div>
      </div>

      {/* most right filter options */}
      <div className={`flex flex-row items-center`}>
        {/* TODO: handle onClick for these filters */}
        <div className={`flex flex-row p-1 cursor-pointer`}>
          <MainHamMenu className={`fill-at-half-black opacity-55 hover:opacity-70`} />
        </div>
        <div className={`flex flex-row p-1 cursor-pointer rounded-full bg-black/5`}>
          <MainWindowIcon className={`fill-at-half-black opacity-100`} />
        </div>
      </div>
    </div>
  );
};

export default BaseFilterMenu;