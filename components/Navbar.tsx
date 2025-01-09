import Image from "next/image";
import facebook from "@/public/facebook.png";
import instagram from "@/public/instagram.png";
import tiktok from "@/public/tiktok.png";
import youtube from "@/public/youtube.png";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 h-24 nav-bg z-50">
      <div className="flex gap-3 flex-1 items-center max-1024:hidden">
        <Image src={facebook} alt="facebook" width={24} height={24} />
        <Image src={instagram} alt="instagram" width={24} height={24} />
        <Image src={tiktok} alt="tiktok" width={24} height={24} />
        <Image src={youtube} alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-center font-bold text-3xl max-1280:text-2xl max-1024:text-left max-768:text-xl">
        Packaged Rants
      </div>
      <div className="flex gap-5 flex-1 text-lg items-center max-1280:text-[16px] max-1280:gap-4 justify-end">
        <ThemeToggler />
        <Link href="/" className="max-640:hidden">
          Homepage
        </Link>
        <Link href="/" className="max-640:hidden">
          Contact
        </Link>
        <Link href="/" className="max-640:hidden">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
