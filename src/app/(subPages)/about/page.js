import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import { Headphone } from "@/components/models/about/Headphone";
import { Mouse } from "@/components/models/about/Mouse";
import { Controller } from "@/components/models/about/Controller";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25 "
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Headphone />
        </RenderModel>
      </div>{" "}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-2/3 -translate-y-1/2 left-0">
        <RenderModel>
          <Mouse />
        </RenderModel>
      </div>
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-2/3 -translate-y-1/2 left-0">
        <RenderModel>
          <Controller />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Ali Sabet
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the nerd behind this portofolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
