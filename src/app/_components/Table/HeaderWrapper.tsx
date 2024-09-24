import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const HeaderWrapper: React.FC<BaseComponentProps> = ({ className, children }) => {
  return (
    <th className={`relative border-b border-b-at-table-bot-gray p-0 bg-[#f5f5f5] h-8 ${className}`}>
      {children}
    </th>
  );
};

export default HeaderWrapper;