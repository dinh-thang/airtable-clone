import React from "react";
import Link from "next/link";
import { type LinkProps } from "~/interfaces/interfaces";

const BlueHoverLink: React.FC<LinkProps> = ({ className, children, href, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className={`hover:text-at-btn-primary-hover transition-colors ease-in-out duration-200 ${className}`}>
      {children}
    </Link>
  );
};

export default BlueHoverLink;