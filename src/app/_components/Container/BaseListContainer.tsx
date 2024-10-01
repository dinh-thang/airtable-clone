import React from "react";
import { type BaseListContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import MainPageCard from "~/app/_components/Card/MainPageCard";
import Link from "next/link";
import { pageRoutes } from "~/constants/pageRoutes";

const BaseListContainer: React.FC<BaseListContainerProps> = ({ workspaceId, className }) => {
  const { data: baseList } = api.base.getAllBasesByWorkspaceIds.useQuery({
    workspaceId,
  });

  if (!baseList) return;

  return (
    <div className={`h-full w-full grid grid-cols-4 gap-4 grid-auto-flow-col ${className}`}>
      {baseList.map((base) => (
        <Link key={base.id} href={pageRoutes.BASE + "/" + base.id}>
          <MainPageCard className={`h-24 mt-1`}>
            {base.name}
          </MainPageCard>
        </Link>
      ))}
    </div>
  );
};

export default BaseListContainer;
