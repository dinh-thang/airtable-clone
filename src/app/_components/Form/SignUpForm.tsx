import React from "react";
import { type BaseComponentProps } from "~/interfaces/interfaces";
import AirTableAuthLogo from "~/app/_components/Icon/Auth/AirTableAuthLogo";
import TextInputField from "~/app/_components/InputField/TextInputField";
import NonHoverBtn from "~/app/_components/Btn/NonHoverBtn";

const SignUpForm: React.FC<BaseComponentProps> = ({ className }) => {
  return (
    <form
      className={`flex flex-col ${className}`}
    >
      <div className={`w-full py-8`} />

      <div className={`flex justify-center mt-5`}>
        <AirTableAuthLogo />
      </div>

      <h1 className={`mt-8 mb-8 font-medium text-[35px]`}>Create your free account</h1>

      <div>
        <TextInputField placeholder={`name@company.com`} label={`Work email`} id="work-email" className={`mb-4`} />

        <NonHoverBtn className={`py-[7px] px-3.5 w-full`}>
          <p className={`text-[15px]`}>Continue</p>
        </NonHoverBtn>
      </div>
    </form>
  );
};

export default SignUpForm;