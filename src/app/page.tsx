import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Harry from "@/components/models/Harry";
import { useState, useEffect } from "react";

const texts = ["Hai, selamat datang!!", "* Portofolio *", "* Spotify *", "* Karya *"];

export default function Home() {
  const [currentText, setCurrentText] = useState(""); // Teks yang sedang diketik
  const [textIndex, setTextIndex] = useState(0); // Indeks teks saat ini
  const [isDeleting, setIsDeleting] = useState(false); // Apakah teks sedang dihapus
  const typingSpeed = 100; // Kecepatan mengetik
  const delay = 1000; // Waktu tunggu sebelum menghapus teks

  useEffect(() => {
    let timeout;
    const handleTyping = () => {
      const fullText = texts[textIndex];
      if (!isDeleting) {
        // Menambah karakter
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), delay); // Tunggu sebelum hapus
        }
      } else {
        // Menghapus karakter
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // Ganti teks berikutnya
        }
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout); // Bersihkan timeout
  }, [currentText, isDeleting, textIndex]);

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
          <p className="text-lg font-mono text-green-500 px-4 py-2 rounded animate-blink">
            {currentText}
            <span className="border-r-2 border-green-500"></span>
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
            className="px-6 py-3 bg-black-300 text-white rounded-lg text-lg font-medium shadow hover:bg-black-300 transition"
          >
            Kunjungi Linktree Saya
          </a>
        </div>
      </div>
    </main>
  );
}