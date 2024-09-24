import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import AirTableAuthLogo from "~/app/_components/Icon/Auth/AirTableAuthLogo";
import { pageRoutes } from "~/constants/pageRoutes";
import Link from "next/link";
import TextInputField from "~/app/_components/InputField/TextInputField";
import NonHoverBtn from "~/app/_components/Btn/NonHoverBtn";

const LoginForm: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <form
      className={`flex flex-col ${className}`}
    >
      <div className={`w-full py-8`} />

      <div className={`flex justify-center mt-5`}>
        <AirTableAuthLogo/>
      </div>

      <h1 className={`mt-8 text-center font-medium text-[32px]`}>Sign in</h1>

      <p className={`text-base text-center mt-2 mb-8`}>
        or <Link className={`underline text-[#0768f8] hover:no-underline`} href={pageRoutes.LOGIN}>create an account</Link>
      </p>

      <div>
        <TextInputField placeholder={`Email address`} label={`Email`} id="email" className={`mb-4`} />

        <NonHoverBtn className={`py-[7px] px-3.5 w-full`}>
          <p className={`text-[15px]`}>Continue</p>
        </NonHoverBtn>
      </div>
    </form>
  );
};

export default LoginForm;