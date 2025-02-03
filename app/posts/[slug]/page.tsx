import Menu from "@/components/Menu";
import Image from "next/image";
import Comments from "@/components/Comments";
import { Post } from "@/types";

const getData = async (slug: string): Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const SinglePage = async ({ params }: any) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className="mt-20">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="font-bold text-5xl mb-12 max-1024:text-4xl max-640:text-3xl">
            {data?.title}
          </h1>
          <div className="flex items-center gap-5">
            {data?.user?.image && (
              <div className="h-12 w-12 relative">
                <Image
                  src={data.user.image}
                  alt=""
                  className="object-cover rounded-[50%]"
                  fill
                />
              </div>
            )}
            <div className="flex flex-col text-[#626262]">
              <span className="text-lg font-bold">{data?.user?.name}</span>
              <span className="text-sm">10.01.2025</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="flex-1 relative h-[350px]  max-1024:hidden">
            <Image src={data.img} alt="" className="object-cover" fill />
          </div>
        )}
      </div>
      <div className="flex gap-12">
        <div className="flex-[5] mt-14">
          <div
            className="font-xl mb-5"
            dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
          />
          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
