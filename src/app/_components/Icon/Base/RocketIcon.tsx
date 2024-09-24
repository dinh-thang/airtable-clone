import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";

const RocketIcon: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 16 16" className={` ${className}`}>
      <use fill="currentColor" href="/icons/icon_definitions.svg?v=4ff0794f56fc1e06fa1e614b25254a46#RocketLaunch"></use>
    </svg>
  );
};

export default RocketIcon;