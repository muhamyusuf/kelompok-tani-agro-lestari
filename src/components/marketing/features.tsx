import React from "react";
import { Gem, Repeat2, TentTree } from "lucide-react";

const features = [
    {
        icon: <Gem className="w-6 h-6 text-emerald-600" />,
        title: "Melon Premium",
        description:
            "Melon unggulan dengan rasa manis maksimal, aroma segar, dan tekstur renyah berkualitas ekspor.",
    },
    {
        icon: <Repeat2 className="w-6 h-6 text-emerald-600" />,
        title: "Konsistensi Buah",
        description:
            "Setiap buah dipanen dengan standar ukuran dan kematangan yang seragam untuk menjaga pengalaman terbaik.",
    },
    {
        icon: <TentTree className="w-6 h-6 text-emerald-600" />,
        title: "Teknologi Greenhouse",
        description:
            "Ditanam dalam greenhouse tanah & hidroponik untuk mengontrol iklim, hama, dan kualitas tanah secara presisi.",
    },
];

const FeatureSection: React.FC = () => {
    return (
        <section id="keunggulan" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Kenapa Memilih Kami?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
                    Kami menerapkan sistem pertanian modern untuk menghasilkan melon premium terbaik secara konsisten.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="border border-[#2E6B54]/30 dark:border-[#2E6B54] p-6 rounded-xl bg-white dark:bg-[#17362B] shadow-sm text-left"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-emerald-600 dark:text-emerald-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
