import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const MainWindowIcon: React.FC<BaseComponentProps> = ({className}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" className={`flex ${ className }`}>
      <use fill="rgb(99, 73, 141)" href="/icons/icon_definitions.svg?v=4ff0794f56fc1e06fa1e614b25254a46#GridFour"></use>
    </svg>
  );
};

export default MainWindowIcon;