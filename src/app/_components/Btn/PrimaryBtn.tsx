import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const PrimaryBtn: React.FC<BtnProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={`rounded-md bg-at-btn-primary hover:bg-at-btn-primary-hover text-white font-medium py-[5px] px-2.5 shadow-md transition-colors duration-200 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;