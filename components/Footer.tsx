import Image from "next/image";
import fbImg from "@/public/facebook.png";
import instaImg from "@/public/instagram.png";
import tiktokImg from "@/public/tiktok.png";
import ytImg from "@/public/youtube.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-10 flex justify-between text-[#626262] pb-9 items-center max-768:flex-col max-768:gap-12">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-black rounded-[50%]"></div>
          <h1 className="text-2xl font-semibold">Packaged Rants</h1>
        </div>
        <p className="font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          molestias consequatur, provident numquam nostrum facilis explicabo
          perspiciatis totam fugiat sit obcaecati nulla, dolores molestiae
          suscipit saepe eligendi, culpa eaque dolor.
        </p>
        <div className="flex gap-3 mt-2">
          <Image src={fbImg} alt="" width={18} height={18} />
          <Image src={instaImg} alt="" width={18} height={18} />
          <Image src={tiktokImg} alt="" width={18} height={18} />
          <Image src={ytImg} alt="" width={18} height={18} />
        </div>
      </div>
      <div className="flex-1 flex justify-end gap-24 max-1024:gap-12 max-768:justify-between max-768:w-full max-640:text-sm">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Links</span>
          <Link href="/">HomePage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
