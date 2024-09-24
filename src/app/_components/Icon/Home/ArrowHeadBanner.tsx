import React from "react";
import { type SvgProps } from "~/interfaces/interfaces";

const ArrowHeadBanner:React.FC<SvgProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"
         className={`rotate-180 fill-at-btn-primary ${className}`} style={{ transform: 'rotate(180deg)' }}>
      <path
            d="M17 6.75a.75.75 0 0 0 0-1.5zM.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 1 0 1.06-1.06L2.061 6l4.242-4.243a.75.75 0 0 0-1.06-1.06zM17 5.25H1v1.5h16z"></path>
    </svg>
  )
};

export default ArrowHeadBanner;