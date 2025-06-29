import React from "react";

const HeaderHero: React.FC = () => {
    return (
        <section
            id="beranda"
            className="relative h-[70vh] md:h-[80vh] pt-5 md:py-20 px-4"
        >
            <div className="max-w-6xl mx-auto h-full rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-full">
                    {/* Background Image */}
                    <img
                        src="/marketing/hero-image.png"
                        alt="Melon Premium"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

                    {/* Content */}
                    <div className="relative z-20 flex flex-col justify-end h-full p-6 sm:p-10 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight drop-shadow-lg">
                            Melon Premium dari Lampung Timur
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl max-w-xl drop-shadow">
                            Langsung dari kebun petani ke meja Anda. Segar, manis, dan alami.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderHero;
