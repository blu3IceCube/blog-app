import MenuCard from "./MenuCard";
import Image from "next/image";
import Link from "next/link";
import tempImg from "@/public/p1.jpg";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className="flex-[2] mt-14 max-1024:hidden">
      <h2 className="text-gray-500 font-normal text-sm">What's hot</h2>
      <h1 className="font-bold text-xl">Most Popular</h1>
      <MenuPosts withImage={false} fontSize="text-base" />

      <h2 className="text-gray-500 font-normal text-sm">Discover by topic</h2>
      <h1 className="font-bold text-xl">Categories</h1>
      <MenuCategories />

      <h2 className="text-gray-500 font-normal text-sm">Choosen by editors</h2>
      <h1 className="font-bold text-xl">Editor's Pick</h1>
      <MenuPosts withImage={true} fontSize="text-sm" />
    </div>
  );
};

export default Menu;
