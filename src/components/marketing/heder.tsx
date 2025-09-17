import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "../ui/button";

const HeaderHero: React.FC = () => {
    return (
        <section
            id="beranda"
            className="relative h-[70vh] md:h-[100vh] pt-24 md:pt-28 px-4"
        >
            <div className="max-w-6xl mx-auto h-full rounded-xl overflow-hidden shadow-lg animate-fadeInUp">
                <div className="relative h-full">
                    {/* Background Image */}
                    <Image
                        fill
                        quality={70}
                        src="/marketing/hero-image.png"
                        alt="Melon Premium"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

                    {/* Content */}
                    <div className="relative z-20 flex flex-col justify-end h-full p-6 sm:p-10 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight drop-shadow-lg">
                            Melon Premium dari Lampung Timur
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl max-w-2xl drop-shadow">
                            Segar dan manis, siap dipindahkan dari kebun ke meja makan Anda.
                        </p>

                        <a href="#produk" className={`${buttonVariants()} bg-emerald-800! dark:bg-emerald-600 text-white dark:text-white mt-5`}>Pindahkan Melon Sekarang</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeaderHero;
