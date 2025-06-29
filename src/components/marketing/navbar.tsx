"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sprout } from "lucide-react";
import ThemeToggler from "@/components/theme/toggler";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    const navLinks = [
        { title: "Beranda", href: "/#beranda" },
        { title: "Tentang Kami", href: "/#tentang" },
        { title: "Produk", href: "/#produk" },
        { title: "Galeri", href: "/#galeri" },
        { title: "Testimonial", href: "/#testimonial" },
        { title: "Blog/Artikel", href: "/blog" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-background/80 backdrop-blur-md shadow-sm transition-all">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/marketing/logo.png"
                        alt="Melon Agro Lestari Logo"
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                    />
                    <span className="text-lg font-semibold text-foreground">
                        Melon Agro Lestari
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
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

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
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
