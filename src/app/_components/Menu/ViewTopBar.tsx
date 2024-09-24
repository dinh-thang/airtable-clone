import React from "react";
import BaseViewHamMenuIcon from "~/app/_components/Icon/Base/BaseViewHamMenuIcon";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const ViewTopBar: React.FC<BaseComponentProps> = ({className}) => {
  return (
    <div className={`flex items-center h-[44px] bg-white shadow-at-view-top-bar ${className}`}>
      <div className={`flex items-center pl-3 h-[44px]`}>
        <div className={`flex flex-row items-center px-1.5 border-l-[1.6px] border-white`}>
          <BaseViewHamMenuIcon />
        </div>
      </div>

      <div className={`h-[44px]`}>
      </div>

      <div className={`h-[44px]`}>
      </div>
    </div>
  );
};

export default ViewTopBar;