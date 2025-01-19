import Image from "next/image";
import Link from "next/link";
import tempImg from "@/public/p1.jpg";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="mt-12">
      <h1 className="font-bold text-3xl text-[#626262] mb-9">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="write a comment..."
            className="p-5 w-full text-black"
          />
          <button className="py-2 px-5 bg-teal-500 text-white font-bold border-none rounded-md cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href=".login">Login to write a comment</Link>
      )}
      <div className="mt-12">
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <div className="h-12 w-12 relative">
              <Image
                src={tempImg}
                alt=""
                className="object-cover rounded-[50%]"
                fill
              />
            </div>
            <div className="flex flex-col text-[#626262]">
              <span className="text-md font-bold">John Doe</span>
              <span className="text-xs">10.01.2025</span>
            </div>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
