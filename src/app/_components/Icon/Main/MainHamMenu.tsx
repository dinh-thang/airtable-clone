import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const MainHamMenu: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4" className={className}>
      <path d="M4 18L20 18" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12L20 12" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 6L20 6" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default MainHamMenu;