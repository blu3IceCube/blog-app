import Image from "next/image";
import Link from "next/link";
import styleImg from "@/public/style.jpg";
import fashionImg from "@/public/fashion.jpg";
import foodImg from "@/public/food.jpg";
import travelImg from "@/public/travel.jpg";
import cultureImg from "@/public/culture.jpg";
import CodingImg from "@/public/Coding.jpg";

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-12">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link href="/blog?cat=style" className="flex items-center gap-3">
          <Image src={styleImg} alt="" width={32} height={32} className="" />
          Style
        </Link>
        <Link href="/blog?cat=style" className="flex items-center gap-3">
          <Image src={fashionImg} alt="" width={32} height={32} className="" />
          Fashion
        </Link>
        <Link href="/blog?cat=style" className="flex items-center gap-3">
          <Image src={foodImg} alt="" width={32} height={32} className="" />
          Food
        </Link>
        <Link href="/blog?cat=style" className="flex items-center gap-3">
          <Image src={travelImg} alt="" width={32} height={32} className="" />
          Travel
        </Link>
        <Link href="/blog?cat=style" className="flex items-center gap-3">
          <Image src={cultureImg} alt="" width={32} height={32} className="" />
          Culture
        </Link>
        <Link href="/blog?cat=style" className="flex items-center gap-3">
          <Image src={CodingImg} alt="" width={32} height={32} className="" />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
