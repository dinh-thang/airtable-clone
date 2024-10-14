"use client"

import React from "react";

import { type BaseComponentProps } from "~/interfaces/interfaces";

import RocketIcon from "~/app/_components/Icon/Base/RocketIcon";
import BaseFilterBarArrow from "~/app/_components/Icon/Base/BaseFilterBarArrow";
import BaseNavBar from "~/app/_components/Header/BaseNavBar";
import QuestionMarkIcon from "~/app/_components/Icon/QuestionMarkIcon";
import NotificationIcon from "~/app/_components/Icon/NotificationIcon";
import { api } from "~/trpc/react";
import { useIsFetching } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import RevertIcon from "~/app/_components/Icon/RevertIcon";

export interface BaseTopBarProps extends BaseComponentProps {
  baseId: string;
}

const BaseTopBar: React.FC<BaseTopBarProps> = ({ className, baseId }) => {
  const { data, status } = useSession();
  const { data: base, isLoading } = api.base.getBaseById.useQuery(
    { id: baseId },
    { enabled: !!baseId }
  );
  const isFetching = useIsFetching();

  return (
    <header
      className={`absolute left-0 right-0 top-0 flex h-14 flex-col ${className}`}
    >
      <div className={`flex flex-1`}>
        <div className={`flex h-full flex-row items-center`}>
          <RocketIcon className="mr-4" />

          {isLoading ? (
            <span className={`mr-1 h-4 w-14 bg-black/10 rounded-full animate-pulse`} />
          ) : (
            <div className={`flex flex-row items-center`}>
              <span className={`mr-1 text-[17px] font-semibold`}>
                {base?.name ?? "Base name"}
              </span>
              <BaseFilterBarArrow />
            </div>
          )}
        </div>

        <BaseNavBar className={`flex`} />

        {/* action group */}
        <div className={`flex flex-1 items-center justify-end`}>
          {isFetching ? (
            <div
              className={`mx-3 flex h-7 animate-pulse items-center rounded-full bg-black/10 px-3`}
            >
              <span className={`text-[13px] text-at-half-black`}>
                Loading...
              </span>
            </div>
          ) : (
            <div />
          )}

          {/* revert icon */}
          <div className={`flex h-7 cursor-pointer flex-row items-center rounded-full px-3 text-black/65 hover:bg-black/10`}>
            <RevertIcon/>
          </div>

          <div
            className={`flex h-7 cursor-pointer flex-row items-center rounded-full px-3 text-black/65 hover:bg-black/10`}
          >
            <QuestionMarkIcon />
            <span className={`ml-1 text-white text-[13px]`}>Help</span>
          </div>

          <div
            className={`mx-3 flex h-7 items-center rounded-full bg-white shadow-at-main-nav`}
          >
            <div
              className={`flex w-7 cursor-pointer items-center justify-center text-black/65`}
            >
              <NotificationIcon />
            </div>
          </div>

          {/* profile img */}
          <div className={`ml-2 flex h-7 items-center justify-center`}>
            {status !== "loading" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={`h-7 w-7 cursor-pointer rounded-full border-[0.8px] border-white`}
                src={data?.user?.image ?? ""}
                alt={``}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BaseTopBar;