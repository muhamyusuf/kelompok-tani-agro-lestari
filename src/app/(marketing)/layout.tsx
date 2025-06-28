import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0F241C]">
      {/* Radial Overlay */}
      <div className="fixed pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#17362B] dark:bg-[#8FCCB8] opacity-30 blur-[120px] rounded-full" />
      </div>

      <main className="z-10 w-full flex-1 overflow-visible">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
