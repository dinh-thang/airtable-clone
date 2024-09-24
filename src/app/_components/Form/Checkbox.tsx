import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const Checkbox: React.FC<BaseComponentProps> = ({ className, children }) => {
  return (
    <div className={`absolute top-2.5 left-[11px] w-[11px] h-[11px] bg-white border border-[#95a0a6] rounded-[2px] ${className}`}>
      {children}
    </div>
  );
};

export default Checkbox;