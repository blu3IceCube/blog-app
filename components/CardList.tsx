import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import { Post } from "@/types";

const getData = async (page: number): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const CardList = async ({ page }: { page: number }) => {
  const data = await getData(page);
  return (
    <div className="flex-[5]">
      <h1 className="font-bold text-2xl my-10">Recent Posts</h1>
      <div>
        {data?.map((item: any) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default CardList;
