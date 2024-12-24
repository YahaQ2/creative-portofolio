import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-image"
        fill
        priority
        sizes="100vw"
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />

      {/* Navigation and Content */}
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Navigation />
        
        {/* Welcome Text */}
        <div className="absolute top-20 text-center">
          <p className="font-light text-foreground text-lg text-white">
            Hai, selamat datang!!
          </p>
        </div>

        {/* Render Model */}
        <RenderModel>
          <Harry />
        </RenderModel>

        {/* Embedded Link */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <iframe
            src="https://linktr.ee/Ferputra"
            className="w-[90%] h-96 border-2 border-gray-300 rounded-lg"
            title="Ferputra Linktree"
          ></iframe>
        </div>
      </div>
    </main>
  );
}