import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="bg-orange-400 text-white py-1 px-3 text-2xl text-center font-semibold">
        Style Blog
      </h1>
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
