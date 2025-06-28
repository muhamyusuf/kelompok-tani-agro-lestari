import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    const footerLinks = [
        { title: "Beranda", href: "/#beranda" },
        { title: "Tentang Kami", href: "/#tentang" },
        { title: "Produk", href: "/#produk" },
        { title: "Galeri", href: "/#galeri" },
        { title: "Testimonial", href: "/#testimonial" },
        { title: "Blog/Artikel", href: "/blog" },
        {}
    ];

    return (
        <footer className="backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
                    {footerLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-emerald-700 dark:text-[#8FCCB8] transition hover:text-emerald-900 hover:underline"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                <div className="mt-10 flex justify-center space-x-6">
                    <a
                        href="#"
                        className="text-emerald-600 transition hover:text-emerald-800 dark:text-[#8FCCB8] dark:hover:text-[#8FCCB8]/90"
                    >
                        <span className="sr-only">Instagram</span>
                        <Instagram className="h-6 w-6" />
                    </a>
                    <a
                        href="#"
                        className="text-emerald-600 transition hover:text-emerald-800 dark:text-[#8FCCB8] dark:hover:text-[#8FCCB8]/90"
                    >
                        <span className="sr-only">Facebook</span>
                        <Facebook className="h-6 w-6" />
                    </a>
                    <a
                        href="#"
                        className="text-emerald-600 transition hover:text-emerald-800 dark:text-[#8FCCB8] dark:hover:text-[#8FCCB8]/90"
                    >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-6 w-6" />
                    </a>
                </div>

                <p className="mt-10 text-center text-sm text-emerald-700 dark:text-[#8FCCB8]/90">
                    © {new Date().getFullYear()} Melon Premium Agro Lestari. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}