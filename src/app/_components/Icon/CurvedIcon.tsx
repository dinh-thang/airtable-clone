import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const CurvedIcon: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg className={`${className}`} width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 1.65686 1.34326 3 3 3H0V0Z" fill="white" />
    </svg>

  );
};

export default CurvedIcon;