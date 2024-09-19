import React from "react";
import WhiteOAuthBtn from "~/app/_components/Btn/WhiteOAuthBtn";
import AuthGoogleIcon from "~/app/_components/Icon/AuthGoogleIcon";

const OAuthForm = () => {
  return (
    <div>
      <form>
        <WhiteOAuthBtn className={`w-full gap-2.5 py-[7px] px-3.5 `}>
          <AuthGoogleIcon/>
          <p className={`ml-2 text-xl`}>Sign in with Google</p>
        </WhiteOAuthBtn>
      </form>

      <form className={`pt-4`}>
        <WhiteOAuthBtn className={`w-full gap-2.5 py-[7px] px-3.5 `}>
          <p className={`ml-2 text-xl`}>Sign in with Single Sign On</p>
        </WhiteOAuthBtn>
      </form>

      <div>

      </div>
    </div>
  );
};

export default OAuthForm;