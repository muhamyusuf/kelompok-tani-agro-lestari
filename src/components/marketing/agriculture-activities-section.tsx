'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const activities = [
    {
        title: "Penyemaian",
        description:
            "Benih melon disemai di media khusus dengan kelembaban terjaga dan nutrisi yang cukup, memastikan bibit tumbuh sehat untuk tahap selanjutnya.",
        image: "https://picsum.photos/id/1011/800/450",
    },
    {
        title: "Pindah Tanam",
        description:
            "Bibit yang telah kuat dipindahkan ke lahan tanam atau greenhouse dengan tata letak rapi agar pertumbuhan tanaman optimal dan seragam.",
        image: "https://picsum.photos/id/1021/800/450",
    },
    {
        title: "Maintenance Tanaman",
        description:
            "Perawatan rutin mencakup penyiraman, pengendalian hama, dan pemantauan kesehatan tanaman secara berkala untuk menjaga pertumbuhan yang stabil.",
        image: "https://picsum.photos/id/1031/800/450",
    },
    {
        title: "Polinasi",
        description:
            "Proses penyerbukan dilakukan secara alami atau manual untuk meningkatkan kualitas buah, memastikan setiap bunga menghasilkan melon terbaik.",
        image: "https://picsum.photos/id/1041/800/450",
    },
    {
        title: "Pruning",
        description:
            "Pemangkasan daun dan cabang yang tidak produktif membantu fokus energi tanaman, sehingga pertumbuhan dan pembentukan buah lebih maksimal.",
        image: "https://picsum.photos/id/1051/800/450",
    },
    {
        title: "Penyesuaian Nutrisi",
        description:
            "Nutrisi dan pupuk cair diberikan sesuai fase pertumbuhan tanaman melon, memastikan setiap fase mendapatkan dukungan gizi yang optimal.",
        image: "https://picsum.photos/id/1061/800/450",
    },
    {
        title: "Masa Panen",
        description:
            "Buah melon dipetik pada saat kematangan optimal dengan rasa manis, aroma segar, dan kualitas terbaik untuk siap didistribusikan ke konsumen.",
        image: "https://picsum.photos/id/1071/800/450",
    },
];

const AgricultureActivitiesSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleChangeSlide = (nextIndex: number) => {
        if (nextIndex === currentIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
        }, 300);
    };

    const prevSlide = () =>
        handleChangeSlide(currentIndex === 0 ? activities.length - 1 : currentIndex - 1);
    const nextSlide = () =>
        handleChangeSlide(currentIndex === activities.length - 1 ? 0 : currentIndex + 1);

    return (
        <section className="w-full bg-emerald-900 text-white rounded-sm py-14 md:py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
                {/* Header */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between mb-6 text-sm text-green-300">
                    <p className="mb-2 md:mb-0">
                        [{String(currentIndex + 1).padStart(2, "0")}/
                        {String(activities.length).padStart(2, "0")}]
                    </p>

                    <div className="flex items-center justify-center flex-wrap gap-3">
                        {activities.map((act, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleChangeSlide(idx)}
                                className={`text-xs sm:text-sm px-3 py-1 rounded-sm transition-all ${idx === currentIndex
                                    ? "bg-white text-green-800 font-semibold"
                                    : "text-green-300 hover:text-white"
                                    }`}
                            >
                                {act.title}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:block text-right text-green-400 text-xs font-light">
                        Kegiatan
                        <br /> Penyemaian <br /> Perawatan <br /> Panen
                    </div>
                </div>

                {/* Image box with transition */}
                <div className="relative w-full max-w-4xl my-6">
                    <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center bg-emerald-800 rounded-xl overflow-hidden">
                        <Image
                            key={activities[currentIndex].image}
                            src={activities[currentIndex].image}
                            alt={activities[currentIndex].title}
                            width={800}
                            height={450}
                            className={`w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"
                                }`}
                        />
                    </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-3 right-3 flex gap-3">
                    <button
                        onClick={prevSlide}
                        className="bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-green-100 bg-none text-sm sm:text-base leading-relaxed">
                    {activities[currentIndex].description}
                </p>
            </div>
        </section>
    );
};

export default AgricultureActivitiesSection;
