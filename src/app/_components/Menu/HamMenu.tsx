import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const HamMenu: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <button className={`flex flex-col h-8 w-8 px-1 py-[10px] justify-center items-center ${className}`}>
      <div className={`flex flex-col justify-between w-full h-full`}>
        <span className={`border-t-[2px] rounded border-black w-full`}/>
        <span className={`border-t-[3px] rounded border-black w-full`}/>
      </div>
    </button>
  );
};

export default HamMenu;