import React from "react";

const HeaderHero: React.FC = () => {
    return (
        <section
            id="beranda"
            className="relative py-12 md:py-20 px-4"
        >
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
                <div className="relative">
                    <img
                        src="/marketing/hero-image.png"
                        alt="Melon Premium"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow">
                            Melon Premium dari Lampung Timur
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg">
                            Langsung dari kebun petani ke meja Anda. Segar, manis, dan alami.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderHero;
