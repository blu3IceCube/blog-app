import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import { Post } from "@/types";

interface PostResponse {
  posts: Post[];
  count: number;
}

const getData = async (page: number, cat?: string): Promise<PostResponse> => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const CardList = async ({ page, cat }: { page: number; cat: string }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className="flex-[5]">
      <h1 className="font-bold text-2xl my-10">Recent Posts</h1>
      <div>
        {posts?.map((item: any) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
