import React from "react";
import { type LinkProps } from "~/interfaces/interfaces";
import Link from "next/link";

const GrayBgHoverLink: React.FC<LinkProps> = ({ className, children, href, onClick }) => {
  return (
    <Link onClick={onClick} href={href} className={`hover:bg-[#0f306a]/5 transition-colors ease-in-out duration-200 ${className}`}>
      {children}
    </Link>
  );
};

export default GrayBgHoverLink;
