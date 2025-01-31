import Image from "next/image";
import Link from "next/link";

const bgColors: Record<string, string> = {
  fashion: "bg-[#da85c731]",
  culture: "bg-[#ffb04f45]",
  coding: "bg-[#5e4fff31]",
  food: "bg-[#7fb88133]",
  style: "bg-[#57c4ff31]",
  travel: "bg-[#ff795736]",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="my-10 font-bold text-2xl">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {data.map((item: any) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`flex items-center gap-3 capitalize w-[15%] h-14 justify-center rounded-xl max-1024:w-[25%] max-768:w-[45%] max-640:w-full ${
              bgColors[item.slug] || "bg-gray-500"
            }`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="rounded-[50%]"
                style={{ height: "32px !important" }}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
