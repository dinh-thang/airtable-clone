import React from "react";
import BaseViewHamMenuIcon from "~/app/_components/Icon/Base/BaseViewHamMenuIcon";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";

interface ViewTopBarProps extends BaseComponentProps {
  tableId: string;
}

const ViewTopBar: React.FC<ViewTopBarProps> = ({className, tableId}) => {
  const { data, isLoading } = api.record.getTotalRowsByTableId.useQuery({ tableId: tableId})

  return (
    <div className={`flex items-center h-[44px] bg-white shadow-at-view-top-bar ${className}`}>
      <div className={`flex items-center px-3 h-[44px]`}>
        <div className={`flex flex-row items-center px-1.5 border-l-[1.6px] border-white`}>
          <BaseViewHamMenuIcon />
        </div>
      </div>

      <div className={`flex items-center h-[44px]`}>
        {isLoading ? (
          <span className={`text-[13px] animate-pulse text-at-half-black`}>
            Loading total rows...
          </span>
        ) : (
          <p>Total rows: {data}</p>
        )}
      </div>

      <div className={`h-[44px]`}>
      </div>
    </div>
  );
};

export default ViewTopBar;