// Komponen navigasi utama yang responsif untuk header aplikasi.
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sprout, ShoppingCart, Moon } from "lucide-react";
import ThemeToggler from "../theme/toggler";

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
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30">
            <div className="container flex h-16 items-center px-4 md:px-6">
                {/* Logo and Brand Name */}
                <a href="#" className="mr-6 flex items-center gap-2">
                    <Sprout className="h-6 w-6 text-green-600" />
                    <span className="hidden font-bold sm:inline-block">
                        Melon Premium Agro Lestari
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden flex-1 items-center justify-center md:flex">
                    <div className="flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Button key={link.title} variant="ghost" asChild>
                                <a href={link.href}>{link.title}</a>
                            </Button>
                        ))}
                    </div>
                </nav>

                {/* Right Icons (Desktop) */}
                <div className="hidden items-center gap-2 md:flex">
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Keranjang Belanja</span>
                    </Button>
                    <ThemeToggler />
                    <span className="sr-only">Ganti Tema</span>
                </div>

                {/* Mobile Menu */}
                <div className="flex flex-1 items-center justify-end md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Buka Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="grid gap-4 py-6">
                                <a href="#" className="mb-4 flex items-center gap-2">
                                    <Sprout className="h-6 w-6 text-green-600" />
                                    <span className="font-bold">Melon Premium Agro Lestari</span>
                                </a>
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.title}
                                        variant="link"
                                        className="justify-start text-base"
                                        asChild
                                    >
                                        <a href={link.href}>{link.title}</a>
                                    </Button>
                                ))}
                                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                                    <Button variant="ghost" size="icon">
                                        <ShoppingCart className="h-5 w-5" />
                                        <span className="sr-only">Keranjang Belanja</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <ThemeToggler />
                                        <span className="sr-only">Ganti Tema</span>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}