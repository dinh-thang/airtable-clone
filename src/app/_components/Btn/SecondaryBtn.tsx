import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const SecondaryBtn: React.FC<BtnProps> = ({ className, onClick, children }) => {
  const hover = "hover:text-bg-at-btn-primary hover:shadow-at-btn-shadow-secondary-hover hover:text-at-btn-primary";

  return (
    <button
      className={`rounded-lg shadow-at-btn-shadow-secondary font-medium py-[5px] px-2.5 hover:bg-at-btn-secondary-hover transition-colors duration-150 ease-in-out ${hover} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;