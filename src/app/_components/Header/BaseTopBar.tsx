"use client"

import React from "react";

import { type BaseComponentProps } from "~/interfaces/interfaces";

import RocketIcon from "~/app/_components/Icon/Base/RocketIcon";
import BaseFilterBarArrow from "~/app/_components/Icon/Base/BaseFilterBarArrow";
import BaseNavBar from "~/app/_components/Header/BaseNavBar";
import QuestionMarkIcon from "~/app/_components/Icon/QuestionMarkIcon";
import NotificationIcon from "~/app/_components/Icon/NotificationIcon";
import { api } from "~/trpc/react";

export interface BaseTopBarProps extends BaseComponentProps {
  userImage: string;
  baseId: string;
}

const BaseTopBar: React.FC<BaseTopBarProps> = ({ className, userImage, baseId }) => {
  const { data: base } = api.base.getBaseById.useQuery({ id: baseId });

  return (
    <header className={`flex flex-col h-14 absolute top-0 right-0 left-0 ${className}`}>
      <div className={`flex flex-1`}>
        <div className={`flex flex-row h-full items-center`}>
          <RocketIcon className="mr-4" />
          <span className={`text-[17px] font-semibold mr-1`}>{base?.name ?? "Base name"}</span>
          <BaseFilterBarArrow />
        </div>

        <BaseNavBar className={`flex`} />

        {/* action group */}
        <div className={`flex flex-1 items-center justify-end`}>
          <div className={`flex cursor-pointer flex-row px-3 h-7 rounded-full items-center text-black/65 hover:bg-black/10`}>
            <QuestionMarkIcon />
            <span className={`text-[13px] ml-1`}>Help</span>
          </div>

          <div className={`flex items-center mx-3 h-7 shadow-at-main-nav bg-white rounded-full`}>
            <div className={`flex items-center cursor-pointer justify-center w-7 text-black/65`}>
              <NotificationIcon />
            </div>
          </div>

          {/* profile img */}
          <div className={`h-7 flex items-center ml-2 justify-center`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={`cursor-pointer rounded-full border-white border-[0.8px] w-7 h-7`}
              src={userImage}
              alt={``}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BaseTopBar;