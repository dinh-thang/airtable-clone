import React from "react";
import { type BaseListContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import MainPageCard from "~/app/_components/Card/MainPageCard";
import Link from "next/link";
import { pageRoutes } from "~/constants/pageRoutes";
import RocketIcon from "~/app/_components/Icon/Base/RocketIcon";

const BaseListContainer: React.FC<BaseListContainerProps> = ({ workspaceId, className }) => {
  const { data: baseList } = api.base.getAllBasesByWorkspaceIds.useQuery(
    { workspaceId },
    { enabled: !!workspaceId }
  );

  if (!baseList) return;

  return (
    <div className={` w-full grid grid-cols-4 gap-4 grid-auto-flow-col ${className}`}>
      {baseList.map((base) => (
        <Link key={base.id} href={pageRoutes.BASE + "/" + base.id}>
          <MainPageCard className={`h-24 mt-1`}>
            <div className={`flex items-center h-full w-full`}>
              <div className={`flex justify-center rounded-lg h-14 w-14 mr-4 items-center bg-teal-500`}>
                <RocketIcon/>
              </div>
              <div className={``}>
                <p className={`text-[13px] font-medium`}>{base.name}</p>
                <p className={`text-[11px] text-[#666] mt-2`}>Base</p>
              </div>
            </div>
          </MainPageCard>
        </Link>
      ))}
    </div>
  );
};

export default BaseListContainer;
