import React, { forwardRef } from "react";
import { type TableHeaderProps } from "~/interfaces/interfaces";

const HeaderWrapper = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ className, children, style, onClick }, ref) => {
    return (
      <th
        ref={ref}
        onClick={onClick}
        style={style}
        className={`relative border-b hover:bg-[#f8f8f8] cursor-pointer border-b-at-table-bot-gray p-0 bg-[#f5f5f5] h-8 max-h-8 ${className}`}
      >
        {children}
      </th>
    );
  }
);
HeaderWrapper.displayName = "HeaderWrapper";

export default HeaderWrapper;
