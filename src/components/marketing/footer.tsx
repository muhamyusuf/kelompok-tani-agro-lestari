import Image from "next/image";

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

                {/* Lokasi */}
                <div className="mt-6 text-center text-sm text-emerald-800 dark:text-[#8FCCB8]/90 px-4 max-w-2xl mx-auto leading-relaxed">
                    Desa Labuhan Ratu VII, Kecamatan Labuhan Ratu, Kabupaten Lampung Timur,<br className="hidden sm:block" />
                    Provinsi Lampung, Indonesia.
                </div>

                {/* WhatsApp */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-600 dark:text-[#8FCCB8] transition hover:text-emerald-800 dark:hover:text-[#8FCCB8]/90 flex-col"
                    >
                        <Image
                            src='/marketing/whatsapp-icon.png'
                            alt="whatsapp-icon"
                            width={100}
                            height={100}
                            className="w-6 h-6"
                        />
                        <span>Hubungi via WhatsApp</span>
                    </a>
                </div>

                {/* Copyright */}
                <p className="mt-6 text-center text-sm text-emerald-700 dark:text-[#8FCCB8]/90">
                    © {new Date().getFullYear()} Melon Premium Agro Lestari by ITERAHERO Gen 4 & 5. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
