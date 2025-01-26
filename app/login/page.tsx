"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log("data", data, "status", status);

  return (
    <div className="flex items-center justify-center mt-14">
      <div className="bg-[#1f273a] py-[100px] px-[130px] flex flex-col gap-12 rounded-xl max-768:py-16 max-768:px-24 max-640:p-8 max-640:text-sm">
        <div
          className="flex items-center justify-center py-3 px-5 rounded-md border-none font-semibold text-white cursor-pointer bg-[#ff5555]"
          onClick={() => signIn()}
        >
          Sign in with Google
        </div>
        <div className="flex items-center justify-center py-3 px-5 rounded-md border-none font-semibold text-white cursor-pointer bg-[#111]">
          Sign in with Github
        </div>
        <div className="flex items-center justify-center py-3 px-5 rounded-md border-none font-semibold text-white cursor-pointer bg-[#087bea]">
          Sign in with Twitter
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
