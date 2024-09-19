import React from "react";
import { type BtnProps } from "~/interfaces/interfaces";

const WhiteOAuthBtn: React.FC<BtnProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={`flex flex-row items-center shadow-at-auth-white-btn justify-center border-transparent rounded-xl border-2 hover:border-black hover:bg-black/5 ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WhiteOAuthBtn;