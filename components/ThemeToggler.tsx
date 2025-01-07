"use client";

import Image from "next/image";
import moon from "@/public/moon.png";
import sun from "@/public/sun.png";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className="w-10 h-5 rounded-full cursor-pointer flex items-center justify-between relative"
      onClick={toggle}
      style={
        theme === "dark" ? { background: "white" } : { background: "#0f172a" }
      }
    >
      <Image src={moon} alt="" width={14} height={14} />
      <div
        className="w-4 h-4 rounded-[50%] absolute"
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={sun} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggler;
