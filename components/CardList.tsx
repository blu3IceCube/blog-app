import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import tempImg from "@/public/p1.jpg";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex-[5]">
      <h1 className="font-bold text-2xl my-10">Recent Posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
