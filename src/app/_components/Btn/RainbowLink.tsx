import React from "react";
import { type LinkProps } from "~/interfaces/interfaces";
import Link from "next/link";
import RainbowBtnArrow from "~/app/_components/Icon/Home/RainbowBtnArrow";

const RainbowLink: React.FC<LinkProps> = ({ className, href }) => {
  return (
    <Link
      className={`inline-block ${className}`}
      href={href}
    >
      <div className={`flex flex-row cursor-pointer items-center shadow-at-rainbow-shadow p-2 bg-white rounded-full mb-4`}>
        <span className={`bg-rainbow-btn px-3 py-1 mr-2 rounded-full`}>
          <p className={`text-xs font-medium text-white`}>NEW</p>
        </span>

        <p className={`text-xs`}>Build apps instantly with AI</p>
        <div className={`ml-4`}>
          <RainbowBtnArrow className={`w-[6px] h-[10px] mr-2 fill-black`} />
        </div>
      </div>
    </Link>
  );
};

export default RainbowLink;