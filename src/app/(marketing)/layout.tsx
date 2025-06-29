import React from "react";
import Image from "next/image";
import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { MessageCircle } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0F241C]">
      {/* Radial Background Overlay */}
      <div className="fixed pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#17362B] dark:bg-[#8FCCB8] opacity-30 blur-[120px] rounded-full" />
      </div>

      {/* Konten Utama */}
      <main className="z-10 w-full flex-1 overflow-visible">
        <Navbar />
        {children}
        <Footer />
      </main>

      {/* Logo Overlay Kiri Bawah */}
      <div className="fixed bottom-5 left-5 z-0 opacity-5 pointer-events-none select-none">
        <Image
          src="/marketing/logo.png"
          alt="Melon Agro Lestari Logo"
          width={100}
          height={100}
          className="h-42 w-42 object-contain"
        />
      </div>

      {/* Tombol WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="hidden sm:inline">Hubungi Kami</span>
      </a>
    </div>
  );
}
