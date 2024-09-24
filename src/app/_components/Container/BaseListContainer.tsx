import React from "react";
import { type BaseListContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";

const BaseListContainer: React.FC<BaseListContainerProps> = ({  }) => {
  // const baseList = api.base.getAllBasesByWorkspaceIds.useQuery({ workspaceId });

  return (
    <div>

    </div>
  );
};

export default BaseListContainer;
