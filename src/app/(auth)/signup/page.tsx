import React from "react";
import SignUpForm from "~/app/_components/Form/SignUpForm";
import OAuthForm from "~/app/_components/Form/OAuthForm";

export default async function SignUpPage() {
  return (
    <main className={`grid font-auth-sans h-screen`}>
      <div className={`flex flex-col items-center justify-center`}>
        <div className={`h-auto`}>
          <SignUpForm className={`w-[500px] mb-2 mx-auto h-auto`} />

          {/* separator */}
          <div className={`flex flex-row w-full justify-between items-center mb-4`}>
            <div className={`w-full h-[1px] bg-[#333333]/30`} />

            <p className={`p-2 text-[#333333]/50`}>or</p>

            <div className={`w-full h-[1px] bg-[#333333]/30`} />
          </div>

          <OAuthForm />

          <div className={`w-full mt-8 flex justify-center`}>
            <p
              className={`inline underline text-sm text-[#41454d]/60 hover:no-underline hover:text-[#41454d] hover:cursor-pointer`}>
              Sign in with <span className={`font-medium`}>Apple ID</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
