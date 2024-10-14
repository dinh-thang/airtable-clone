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
          <div className={`flex h-7 cursor-pointer flex-row items-center rounded-full px-3 text-black/65 hover:bg-black/10 mr-2`} key={i}>
            <Link href={nav.link} className={`flex items-center`}>
              <p className={`text-[13px] text-white`}>{nav.name}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className={`border-l-[0.8px] border-white/10 h-5 mr-3`} />

      <div>
        {navs2.map((nav, i) => (
          <div className={`mr-2 flex h-7 cursor-pointer flex-row items-center rounded-full px-3 text-black/65 hover:bg-black/10`} key={i}>
            <Link href={nav.link} className={`flex items-center`}>
              <p className={`text-[13px] text-white`}>{nav.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BaseNavBar;