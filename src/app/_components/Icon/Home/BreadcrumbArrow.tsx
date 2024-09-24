import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const BreadcrumbArrow: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg width="12" height="12"
         className={`rotate-[270deg] fill-[#181d26]/50 ${className}`}>
      <path
            d="M8.399 4.399a.85.85 0 1 1 1.202 1.202l-3 3a.85.85 0 0 1-1.202 0l-3-3a.85.85 0 1 1 1.202-1.202L6 6.798z"></path>
    </svg>
  );
};

export default BreadcrumbArrow;