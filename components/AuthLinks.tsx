"use client";
import { ThemeContext } from "@/Context/ThemeContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const status: string = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="max-640:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="max-640:hidden">
            Write
          </Link>
          <span className="cursor-pointer max-640:hidden">Logout</span>
        </>
      )}
      <div
        className="hidden flex-col justify-between w-5 h-4 cursor-pointer max-640:flex"
        onClick={() => setOpen(!open)}
      >
        <span
          className="w-full h-[2px]"
          style={
            theme === "dark"
              ? { background: "#ddd" }
              : { background: "#000000" }
          }
        ></span>
        <span
          className="w-full h-[2px]"
          style={
            theme === "dark"
              ? { background: "#ddd" }
              : { background: "#000000" }
          }
        ></span>
        <span
          className="w-full h-[2px]"
          style={
            theme === "dark"
              ? { background: "#ddd" }
              : { background: "#000000" }
          }
        ></span>
      </div>
      {open && (
        <div
          className="flex flex-col items-center justify-center gap-12 text-2xl absolute top-24 left-0 h-[calc(100vh-96px)] w-full"
          style={
            theme === "dark"
              ? { backgroundColor: "#0f172a" }
              : { backgroundColor: "#fff" }
          }
        >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
