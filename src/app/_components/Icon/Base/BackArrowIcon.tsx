import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const BackArrowIcon: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <div className={`group group-hover:opacity-100 ${className}`}>
      <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <path fillRule="evenodd"
          d="M5.64775 2.22725C5.86742 2.44692 5.86742 2.80308 5.64775 3.02275L3.233 5.4375H10.125C10.4357 5.4375 10.6875 5.68934 10.6875 6C10.6875 6.31066 10.4357 6.5625 10.125 6.5625H3.233L5.64775 8.97725C5.86742 9.19692 5.86742 9.55308 5.64775 9.77275C5.42808 9.99242 5.07192 9.99242 4.85225 9.77275L1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225L4.85225 2.22725C5.07192 2.00758 5.42808 2.00758 5.64775 2.22725Z"
          fill="#000000"></path>
      </svg>
    </div>
  );
};

export default BackArrowIcon;