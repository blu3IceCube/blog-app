import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-8 mb-14">
      <Link
        href="/blog?cat=style"
        className="py-2 px-6 text-sm capitalize bg-[#57c4ff31] rounded-lg "
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-2 px-6 text-sm capitalize bg-[#da85c731] rounded-lg "
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-2 px-6 text-sm capitalize bg-[#7fb88133] rounded-lg "
      >
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-2 px-6 text-sm capitalize bg-[#ff795736] rounded-lg "
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-2 px-6 text-sm capitalize bg-[#ffb04f45] rounded-lg "
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-2 px-6 text-sm capitalize bg-[#5e4fff31] rounded-lg "
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
