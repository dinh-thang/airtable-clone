import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const BlueHoverBtn: React.FC<BtnProps> = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={`hover:text-at-btn-primary-hover transition-colors ease-in-out duration-200 ${className}`}>
      {children}
    </button>
  );
};

export default BlueHoverBtn;