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

        {/* Space to Adjust Layout */}
        <div className="h-40"></div>

        {/* Linktree Button */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <a
            href="https://linktr.ee/Ferputra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium shadow hover:bg-blue-600 transition"
          >
            Kunjungi Linktree Saya
          </a>
        </div>
      </div>
    </main>
  );
}