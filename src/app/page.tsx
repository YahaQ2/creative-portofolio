import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";

export default function Home() {
  return (         <p className="font-light text-foreground text-lg">
            Hai selamat datang!! 
          </p>
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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linktree Ferputra</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
    }
    iframe {
      border: none;
      width: 100%;
      height: 100vh;
    }
  </style>
</head>
<body>
  <iframe src="https://linktr.ee/Ferputra"></iframe>
</body>
</html>
      </div>
    </main>
  );
}
