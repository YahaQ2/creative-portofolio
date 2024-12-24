import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        priority
        sizes="100vw"
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Harry />
        </RenderModel>
         <p className="font-light text-foreground text-lg">
            Hai selamat datang!! 
          </p>
      </div>
    </main>
  );
}