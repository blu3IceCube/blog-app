import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

interface BlogPageProps {
  searchParams: Promise<Record<string, string | undefined>>;
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const params = await searchParams;
  const page = parseInt(params.page as string) || 1;
  const cat = params.cat || "";
  return (
    <div>
      <h1 className="bg-orange-400 text-white py-1 px-3 text-2xl text-center font-semibold capitalize">
        {cat} Blog
      </h1>
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
