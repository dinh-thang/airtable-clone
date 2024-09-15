import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const SecondaryBtn: React.FC<BtnProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={`hover:bg-[#181d26] font-medium py-[5px] px-2.5 transition-colors duration-150 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;