import image1 from "@/public/p1.jpg";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="text-7xl">
        <b>Hey, snehil here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="flex items-center gap-12 mt-14">
        <div className="flex-1 relative h-[400px]">
          <Image
            src={image1}
            alt="featured post img"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex-1 flex flex-col gap-5 items-start justify-start">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-xl font-normal text-[#626262]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cum
            molestiae enim quaerat distinctio eligendi aut maxime sint? Omnis
            quaerat provident deleniti repellendus eligendi quibusdam illum
            nulla iure debitis reiciendis.
          </p>
          <button
            className="px-4 py-2 border-none rounded-md font-medium"
            style={{ backgroundColor: "var(--textColor)", color: "var(--bg)" }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
