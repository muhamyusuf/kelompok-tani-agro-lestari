import { MessageCircleMore } from "lucide-react";

export function Footer() {
    const footerLinks = [
        { title: "Beranda", href: "/#beranda" },
        { title: "Tentang Kami", href: "/#tentang" },
        { title: "Produk", href: "/#produk" },
        { title: "Galeri", href: "/#galeri" },
        { title: "Testimonial", href: "/#testimonial" },
        { title: "Blog/Artikel", href: "/blog" },
    ];

    return (
        <footer className="backdrop-blur-sm border-t border-emerald-100/30 dark:border-emerald-800/30">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Navigasi */}
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

                {/* WhatsApp */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-600 dark:text-[#8FCCB8] transition hover:text-emerald-800 dark:hover:text-[#8FCCB8]/90"
                    >
                        <MessageCircleMore className="h-6 w-6" />
                        <span>Hubungi via WhatsApp</span>
                    </a>
                </div>

                {/* Copyright */}
                <p className="mt-10 text-center text-sm text-emerald-700 dark:text-[#8FCCB8]/90">
                    © {new Date().getFullYear()} Melon Premium Agro Lestari. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
