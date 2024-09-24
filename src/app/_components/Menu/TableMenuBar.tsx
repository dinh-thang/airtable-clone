import React from "react";
import { type TableContainerProps } from "~/interfaces/interfaces";

const TableMenuBar: React.FC<TableContainerProps> = ({ className }) => {
  return (
    <div className={`h-8 bg-teal-500 ${className}`}>
      {/* left most group */}
      <div className={`flex flex-row h-8 bg-black/10 pl-2`}>
        {/* TODO: implement dynamic table tab */}
        <div className={`flex h-full items-center px-3`}>
          <span>projects</span>
        </div>

        <div className={`flex h-full items-center px-3`}>
          <span>Table 2</span>
        </div>

        <div className={`flex h-full items-center px-3`}>
          <span>Table 3</span>
        </div>
      </div>

      {/* curved end */}
      <div className={` bg-black/10`}></div>

      {/* right most group */}
      <div className={` bg-black/10`}></div>
    </div>
  );
};

export default TableMenuBar;