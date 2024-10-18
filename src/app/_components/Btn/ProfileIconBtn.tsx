"use client"

import React from "react";
import { type ClickableProps } from "~/interfaces/interfaces";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface ProfileIconBtnProps extends ClickableProps {
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileIconBtn: React.FC<ProfileIconBtnProps> = ({ className, onClick }) => {
  const { data, status } = useSession();

  return (
    <div onClick={onClick} className={`${className}`}>
      {status !== "loading" && (
        <Image
          className={`h-7 w-7 cursor-pointer rounded-full border-[0.8px] border-white`}
          width={28}
          height={28}
          src={data?.user?.image ?? ""}
          alt={`dd`}
        />
      )}
    </div>
  );
};

export default ProfileIconBtn;