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
import { uploadFile } from "@/lib/appwrite";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null); // Store uploaded file URL
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const { theme } = useContext(ThemeContext);

  if (status === "loading") {
    return <div>Loadong...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  // Handle file selection and upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (!selectedFile) return;

    setFile(selectedFile);
    setUploading(true); // Show uploading state

    try {
      const { fileUrl } = await uploadFile(selectedFile);
      setFileUrl(fileUrl);
    } catch (error) {
      console.error("File upload failed", error);
    } finally {
      setUploading(false);
    }
  };

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch(
      "https://blog-app-brown-gamma.vercel.app/api/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: fileUrl,
          slug: slugify(title),
          catSlug: catSlug || "style",
        }),
      }
    );
    console.log("response", res);
  };

  return (
    <div>
      <div className="flex gap-12 items-center">
        <input
          className="p-12 text-5xl border-none outline-none bg-transparent placeholder:text-[#b3b3b1]"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className=" py-2 px-5 ml-12 w-max bg-transparent text-2xl"
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style" className="bg-transparent">
            Style
          </option>
          <option value="fashion" className="bg-transparent">
            Fashion
          </option>
          <option value="food" className="bg-transparent">
            Food
          </option>
          <option value="culture" className="bg-transparent">
            Culture
          </option>
          <option value="travel" className="bg-transparent">
            Travel
          </option>
          <option value="coding" className="bg-transparent">
            Coding
          </option>
        </select>
      </div>
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
            <input
              type="file"
              id="imageUpload"
              accept="image/*,video/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent border-[#1a8917] cursor-pointer">
              <label htmlFor="imageUpload">
                <Image src={imageImg} alt="" width={16} height={16} />
              </label>
            </button>
            <button className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent border-[#1a8917]">
              <Image src={externalImg} alt="" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-[50%] border flex items-center justify-center bg-transparent border-[#1a8917]">
              <Image src={videoImg} alt="" width={16} height={16} />
            </button>
          </div>
        )}

        {/* Show Uploading Text */}
        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}

        {/* Display Uploaded File Preview */}
        {fileUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">Uploaded File:</p>
            {file?.type.startsWith("image/") ? (
              <img
                src={fileUrl}
                alt="Uploaded"
                className="w-32 h-32 object-cover mt-2"
              />
            ) : (
              <video src={fileUrl} controls className="w-32 h-32 mt-2"></video>
            )}
          </div>
        )}

        <button
          className="absolute right-5 py-2 px-5 border-none text-white bg-[#1a8917] cursor-pointer rounded-2xl"
          onClick={handleSubmit}
        >
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
