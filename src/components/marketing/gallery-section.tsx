'use client';

import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "compressed/1.avif",
    "compressed/2.avif",
    "compressed/3.avif",
    "compressed/4.avif",
    "compressed/5.avif",
    "compressed/6.avif",
    "compressed/7.avif",
    "compressed/8.avif",
    "compressed/9.avif",
    "compressed/10.avif"
];

const GallerySection: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openImage = (index: number) => setSelectedIndex(index);
    const closeImage = () => setSelectedIndex(null);
    const prevImage = () =>
        setSelectedIndex((prev) =>
            prev !== null ? (prev + images.length - 1) % images.length : null
        );
    const nextImage = () =>
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % images.length : null
        );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "Escape") closeImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    return (
        <section id="galeri" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Galeri
                </h2>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Galeri ${index + 1}`}
                            className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                            onClick={() => openImage(index)}
                        />
                    ))}
                </div>

                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
                        <button
                            onClick={closeImage}
                            className="absolute top-4 right-4 text-white"
                            aria-label="Tutup"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 text-white"
                            aria-label="Sebelumnya"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <img
                            src={images[selectedIndex]}
                            alt={`Galeri Zoom ${selectedIndex + 1}`}
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-lg"
                        />
                        <button
                            onClick={nextImage}
                            className="absolute right-4 text-white"
                            aria-label="Berikutnya"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
