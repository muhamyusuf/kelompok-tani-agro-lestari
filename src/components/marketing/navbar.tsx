"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggler from "@/components/theme/toggler";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to track Sheet's open/close status

    const navLinks = [
        { title: "Beranda", href: "/#beranda" },
        { title: "Tentang Kami", href: "/#tentang" },
        { title: "Produk", href: "/#produk" },
        { title: "Galeri", href: "/#galeri" },
        { title: "Testimonial", href: "/#testimonial" },
        { title: "Blog/Artikel", href: "/blog" },
    ];

    const handleLinkClick = () => {
        setIsOpen(false); // Close the sheet when a link is clicked
    };

    return (
        <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[92%] md:w-[85%]">
            <div className="mx-auto flex h-14 items-center justify-between rounded-full border border-white/20 bg-white/80 dark:bg-background/60 backdrop-blur-lg shadow-lg px-4 md:px-6 transition-all">

                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/marketing/logo.png"
                        alt="Melon Agro Lestari Logo"
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                    />
                    <span className="text-base md:text-lg font-semibold text-foreground">
                        Melon Agro Lestari
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

                {/* Theme + Mobile Toggle */}
                <div className="flex items-center gap-2 md:gap-3">
                    <ThemeToggler />
                    <span className="sr-only">Ganti Tema</span>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6 text-black dark:text-white" />
                                    <span className="sr-only">Buka Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[260px] py-4 sm:w-[300px]">
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="mb-4 flex items-center gap-2 text-lg font-semibold"
                                    >
                                        <Image
                                            src="/marketing/logo.png"
                                            alt="Melon Agro Lestari Logo"
                                            width={40}
                                            height={40}
                                            className="h-8 w-8 object-contain"
                                        />
                                        Melon Agro Lestari
                                    </Link>
                                </SheetTitle>
                                <div className="mt-4 grid gap-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.title}
                                            href={link.href}
                                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                            onClick={handleLinkClick} // Close sheet when link is clicked
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 border-t pt-4">
                                    <ThemeToggler />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
