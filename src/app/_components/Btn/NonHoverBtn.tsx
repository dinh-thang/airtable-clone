import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const NonHoverBtn: React.FC<BtnProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={`rounded-[12px] bg-at-btn-primary text-white font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NonHoverBtn;