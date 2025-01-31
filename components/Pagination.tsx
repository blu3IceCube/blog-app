"use client";

import { useRouter } from "next/navigation";

const Pagination = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none p-2 bg-red-500 text-white cursor-pointer disabled:cursor-none disabled:bg-red-500/40"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className="w-[100px] border-none p-2 bg-red-500 text-white cursor-pointer disabled:cursor-none disabled:bg-red-500/40"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
