import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section id="tentang" className=" py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Tentang Kami
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                    Melon Premium Agro Lestari adalah kelompok tani yang berdedikasi untuk menghasilkan melon premium berkualitas tinggi di Lampung Timur.
                </p>
                <div className="rounded-xl overflow-hidden shadow-md mb-6">
                    <img
                        src="/marketing/hero-image.png"
                        alt="Petani memanen melon"
                        className="w-full h-auto min-h-[500px] object-cover"
                    />
                </div>
                <div className="text-left">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        Kelompok Tani Agro Lestari
                    </h3>
                    <p className="text-sm text-emerald-700 dark:text-[#8FCCB8] leading-relaxed">
                        Kami adalah kelompok tani yang berdedikasi untuk menghasilkan melon premium berkualitas tinggi di Lampung Timur. Kami berkomitmen untuk praktik pertanian berkelanjutan dan memastikan setiap buah yang kami hasilkan memenuhi standar kualitas tertinggi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
