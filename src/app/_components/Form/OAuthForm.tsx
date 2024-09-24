"use client"

import React from "react";
import WhiteOAuthBtn from "~/app/_components/Btn/WhiteOAuthBtn";
import AuthGoogleIcon from "~/app/_components/Icon/AuthGoogleIcon";
import { signIn } from "next-auth/react";

const OAuthForm = () => {
  return (
    <div>
      <WhiteOAuthBtn onClick={() => signIn("google")} className={`w-full gap-2.5 py-[7px] px-3.5 `}>
        <AuthGoogleIcon/>
        <p className={`ml-2 text-xl`}>Sign in with Google</p>
      </WhiteOAuthBtn>

      {/* TODO: implement SSO */}
      <WhiteOAuthBtn className={`w-full gap-2.5 py-[7px] px-3.5 mt-4`}>
        <p className={`ml-2 text-xl`}>Sign in with Single Sign On</p>
      </WhiteOAuthBtn>

      <div>

      </div>
    </div>
  );
};

export default OAuthForm;