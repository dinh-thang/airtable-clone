import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const PrimaryBtn: React.FC<BtnProps> = ({ className, children, onClick }) => {
  const hover = "hover:bg-at-btn-primary-hover hover:shadow-at-btn-primary-hover"
  const focused = "focus:shadow-at-btn-primary-focused"

  return (
    <button
      className={`rounded-lg bg-at-btn-primary text-white shadow-at-btn-primary-shadow font-medium py-[5px] px-2.5 transition-colors duration-200 ease-in-out ${focused} ${hover} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;