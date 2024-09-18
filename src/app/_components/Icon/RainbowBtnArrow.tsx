import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const RainbowBtnArrow: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none" data-icon="chevronRight" className={`fill-black ${className}`}>
      <path fill-rule="evenodd"
            d="M.28 2.257A1.044 1.044 0 0 1 1.757.78l3.481 3.482a1.044 1.044 0 0 1 0 1.476L1.757 9.22A1.044 1.044 0 0 1 .28 7.743L3.024 5z"
            clip-rule="evenodd"></path>
    </svg>);
};

export default RainbowBtnArrow;