import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import Link from "next/link";

const BaseNavBar: React.FC<BaseComponentProps> = ({ className }) => {
  const navs = [
    {
      name: "Data",
      link: "/",
    },
    {
      name: "Automations",
      link: "/",
    },
    {
      name: "Interfaces",
      link: "/",
    },
  ]

  const navs2 = [
    {
      name: "Forms",
      link: "/",
    },
  ]

  return (
    <nav className={`flex items-center px-4 ${className}`}>
      <div className={`flex flex-row h-auto`}>
        {/* TODO: style the links */}
        {navs.map((nav, i) => (
          <div className={`px-3 mr-2`} key={i}>
            <Link href={nav.link} className={`flex items-center`}>
              <p className={`text-[13px] text-black/65`}>{nav.name}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className={`border-l-[0.8px] border-black/10 h-5 mr-3`} />

      <div>
        {navs2.map((nav, i) => (
          <div className={`px-3 mr-2`} key={i}>
            <Link href={nav.link} className={`flex items-center`}>
              <p className={`text-[13px] text-black/65`}>{nav.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BaseNavBar;