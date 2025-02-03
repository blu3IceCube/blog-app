"use client";

import Image from "next/image";
import Link from "next/link";
import tempImg from "@/public/p1.jpg";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { Comment } from "@/types";
import { useState } from "react";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="mt-12">
      <h1 className="font-bold text-3xl text-[#626262] mb-9">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="write a comment..."
            className="p-5 w-full text-black"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="py-2 px-5 bg-teal-500 text-white font-bold border-none rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href=".login">Login to write a comment</Link>
      )}
      {isLoading
        ? "loading"
        : data?.map((item: any) => (
            <div className="mt-12" key={item._id}>
              <div className="mb-12">
                <div className="flex items-center gap-5 mb-5">
                  <div className="h-12 w-12 relative">
                    {item?.user?.image && (
                      <Image
                        src={item.user.image}
                        alt=""
                        className="object-cover rounded-[50%]"
                        fill
                      />
                    )}
                  </div>
                  <div className="flex flex-col text-[#626262]">
                    <span className="text-md font-bold">{item.user.name}</span>
                    <span className="text-xs">{item.createdAt}</span>
                  </div>
                </div>
                <p className="text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
