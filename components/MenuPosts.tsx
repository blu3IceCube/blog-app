import Image from "next/image";
import Link from "next/link";
import tempImg from "@/public/p1.jpg";

const MenuPosts = ({
  withImage,
  fontSize,
}: {
  withImage: boolean;
  fontSize: string;
}) => {
  return (
    <div className="flex flex-col gap-8 mt-9 mb-14">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src={tempImg}
              alt=""
              className="rounded-[50%] border border-red-500 object-cover"
              fill
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-[10px] py-[3px] px-2 rounded-xl text-white bg-[#ff7857] w-max">
            Travel
          </span>
          <h3 className={`${fontSize} font-semibold text-[#626262]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[10px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.01.2025</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src={tempImg}
              alt=""
              className="rounded-[50%] border border-red-500 object-cover"
              fill
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-[10px] py-[3px] px-2 rounded-xl text-white bg-[#ffb14f] w-max">
            Culture
          </span>
          <h3 className={`${fontSize} font-semibold text-[#626262]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[10px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.01.2025</span>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src={tempImg}
              alt=""
              className="rounded-[50%] border border-red-500 object-cover"
              fill
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-[10px] py-[3px] px-2 rounded-xl text-white bg-[#ffb881] w-max">
            Food
          </span>
          <h3 className={`${fontSize} font-semibold text-[#626262]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[10px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.01.2025</span>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src={tempImg}
              alt=""
              className="rounded-[50%] border border-red-500 object-cover"
              fill
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="text-[10px] py-[3px] px-2 rounded-xl text-white bg-[#ff7887] w-max">
            Fashion
          </span>
          <h3 className={`${fontSize} font-semibold text-[#626262]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[10px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.01.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
