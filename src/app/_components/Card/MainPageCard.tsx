import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const MainPageCard: React.FC<BaseComponentProps> = ({ className, children }) => {
  return (
    <div className={`rounded-md shadow-at-main-nav p-4 bg-white hover:shadow-at-main-nav-hover ${className}`}>
      {children}
    </div>
  );
};

export default MainPageCard;