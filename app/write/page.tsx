"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import plusImg from "@/public/plus.png";
import imageImg from "@/public/image.png";
import externalImg from "@/public/external.png";
import videoImg from "@/public/video.png";
import { ThemeContext } from "@/Context/ThemeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { theme } = useContext(ThemeContext);

  if (status === "loading") {
    return <div>Loadong...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <input
        className="p-12 text-5xl border-none outline-none bg-transparent placeholder:text-[#b3b3b1]"
        type="text"
        placeholder="Title"
      />
      <div className="flex flex-col gap-5 h-[700px] relative overflow-y-auto">
        <button
          className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent cursor-pointer"
          style={
            theme === "dark"
              ? { borderColor: "#0f172a !important" }
              : { borderColor: "#ffffff !important" }
          }
          onClick={() => setOpen(!open)}
        >
          <Image src={plusImg} alt="" width={16} height={16} />
        </button>
        {open && (
          <div
            className="flex gap-5 absolute z-50 w-auto left-12"
            style={
              theme === "dark"
                ? { backgroundColor: "#0f172a" }
                : { backgroundColor: "#ffffff" }
            }
          >
            <button className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent border-[#1a8917]">
              <Image src={imageImg} alt="" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent border-[#1a8917]">
              <Image src={externalImg} alt="" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent border-[#1a8917]">
              <Image src={videoImg} alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <button className="absolute right-5 py-2 px-5 border-none text-white bg-[#1a8917] cursor-pointer rounded-2xl">
          Publish
        </button>
        <ReactQuill
          className="w-full"
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

export default WritePage;
