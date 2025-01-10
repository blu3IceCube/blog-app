import Image from "next/image";
import Link from "next/link";
import styleImg from "@/public/style.jpg";
import fashionImg from "@/public/fashion.jpg";
import foodImg from "@/public/food.jpg";
import travelImg from "@/public/travel.jpg";
import cultureImg from "@/public/culture.jpg";
import codingImg from "@/public/coding.jpg";

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-10 font-bold text-2xl">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-3 capitalize bg-[#57c4ff31] w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full"
        >
          <Image
            src={styleImg}
            alt=""
            width={32}
            height={32}
            className="rounded-[50%]"
            style={{ height: "32px !important" }}
          />
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-3 capitalize bg-[#da85c731] w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full"
        >
          <Image
            src={fashionImg}
            alt=""
            width={32}
            height={32}
            className="rounded-[50%]"
            style={{ height: "32px !important" }}
          />
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-3 capitalize bg-[#7fb88133] w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full"
        >
          <Image
            src={foodImg}
            alt=""
            width={32}
            height={32}
            className="rounded-[50%]"
            style={{ height: "32px !important" }}
          />
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-3 capitalize bg-[#ff795736] w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full"
        >
          <Image
            src={travelImg}
            alt=""
            width={32}
            height={32}
            className="rounded-[50%]"
            style={{ height: "32px !important" }}
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-3 capitalize bg-[#ffb04f45] w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full"
        >
          <Image
            src={cultureImg}
            alt=""
            width={32}
            height={32}
            className="rounded-[50%]"
            style={{ height: "32px !important" }}
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-3 capitalize bg-[#5e4fff31] w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full"
        >
          <Image
            src={codingImg}
            alt=""
            width={32}
            height={32}
            className="rounded-[50%]"
            style={{ height: "32px !important" }}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
