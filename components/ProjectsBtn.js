import Image from "next/image";
// import-link
import Link from "next/link";
//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center  items-center bg-circleStar bg-cover bg-no-repeat bg-center group"
      >
        <img
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[140px] max-h-[140px]"
        />
        <HiArrowRight className="text-4xl absolute group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
