import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import { FC } from "react";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

const Home = async ({ searchParams }: Props) => {
  const props = await searchParams;
  const page = parseInt(props.page as string) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList page={page} cat="" />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
