import Menu from "@/components/Menu";
import Image from "next/image";
import tempImg from "@/public/p1.jpg";
import Comments from "@/components/Comments";

const SinglePage = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="font-bold text-5xl mb-12 max-1024:text-4xl max-640:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 relative">
              <Image
                src={tempImg}
                alt=""
                className="object-cover rounded-[50%]"
                fill
              />
            </div>
            <div className="flex flex-col text-[#626262]">
              <span className="text-lg font-bold">John Doe</span>
              <span className="text-sm">10.01.2025</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative h-[350px]  max-1024:hidden">
          <Image src={tempImg} alt="" className="object-cover" fill />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex-[5] mt-14">
          <div className="font-xl mb-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              deserunt repellat tenetur ratione! Ex illum cupiditate tempore
              repellat odit nisi, similique earum eum officiis numquam
              consectetur sunt est eos necessitatibus.
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
