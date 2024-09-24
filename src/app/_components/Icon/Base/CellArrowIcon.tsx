import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const CellArrowIcon: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={` ${className}`}>
      <use fill="currentColor" fillOpacity={`0.75`} href="/icons/icon_definitions.svg?v=4ff0794f56fc1e06fa1e614b25254a46#ChevronDown"></use>
    </svg>
  );
};

export default CellArrowIcon;