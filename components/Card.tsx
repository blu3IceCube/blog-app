import Image from "next/image";
import tempImg from "@/public/p1.jpg";
import Link from "next/link";
import { Post } from "@/types";

interface CardProps {
  item: Post;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="mb-12 flex items-center gap-8">
      <div className="flex h-[270px] w-[360px] relative max-1280:hidden">
        <Image src={tempImg} alt="" className="object-cover" fill />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <div className="text-xs">
          <span className="text-gray-500">
            {new Date(item.createdAt).toLocaleDateString()} -{" "}
          </span>
          <span className="text-red-500 font-medium">
            {item.catSlug.toUpperCase()}
          </span>
        </div>
        <Link href="/" className="font-bold">
          <h1 className="text-2xl">
            {item.title}
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. */}
          </h1>
        </Link>
        <p className="text-sm text-gray-500">
          {item.desc}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          incidunt ea explicabo velit voluptatem optio veritatis commodi nulla
          voluptatum aut eos labore delectus ad, consequatur accusamus fugiat
          minima omnis itaque! */}
        </p>
        <Link
          href="/"
          className="text-sm border-b-[1px] border-red-500 w-max py-1"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
