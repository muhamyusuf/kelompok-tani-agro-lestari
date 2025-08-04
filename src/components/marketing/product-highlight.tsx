'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    {
        name: "Melon Intanon",
        description: "Melon varietas unggulan dengan rasa segar dan manis khas.",
        image: "/marketing/intanon-melon.png"
    },
    {
        name: "Golden Melon",
        description: "Golden Melon premium berwarna kuning keemasan dengan daging tebal.",
        image: "/marketing/golden-melon.png"
    },
    {
        name: "Sweet Melon",
        description: "Melon manis alami cocok untuk semua kalangan dan cuaca tropis.",
        image: "/marketing/sweet-melon.png"
    }
];

const ProductHighlight: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openImage = (index: number) => setSelectedIndex(index);
    const closeImage = () => setSelectedIndex(null);
    const prevImage = () =>
        setSelectedIndex((prev) =>
            prev !== null ? (prev + products.length - 1) % products.length : null
        );
    const nextImage = () =>
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % products.length : null
        );

    // Kirim pesan WhatsApp dengan template produk
    const handleSendWhatsApp = (productName: string) => {
        const phone = "6281369674457"; // ganti sesuai nomor WA
        const defaultText = `Halo, saya ingin memesan *${productName}* dari Agro Lestari.\n\nMohon informasi ketersediaan dan harga.`;
        const encodedText = encodeURIComponent(defaultText);
        const whatsappLink = `https://wa.me/${phone}?text=${encodedText}`;
        window.open(whatsappLink, "_blank");
    };

    // Keyboard navigation untuk galeri zoom
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
        <section id="produk" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Produk Unggulan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="text-left flex flex-col">
                            <div
                                className="overflow-hidden rounded-xl shadow-md mb-4 cursor-pointer hover:scale-[1.02] transition-transform"
                                onClick={() => openImage(idx)}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={1080}
                                    height={1080}
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-emerald-700 dark:text-[#8FCCB8] mb-3">
                                {product.description}
                            </p>
                            <button
                                onClick={() => handleSendWhatsApp(product.name)}
                                className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                            >
                                Pesan Sekarang
                            </button>
                        </div>
                    ))}
                </div>

                {/* Overlay Zoom */}
                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
                        {/* Tombol Close */}
                        <button
                            onClick={closeImage}
                            className="absolute top-4 right-4 text-white"
                            aria-label="Tutup"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Tombol Sebelumnya */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 text-white"
                            aria-label="Sebelumnya"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        {/* Gambar Zoom */}
                        <Image
                            src={products[selectedIndex].image}
                            alt={products[selectedIndex].name}
                            width={1920}
                            height={1080}
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-lg"
                        />

                        {/* Tombol Berikutnya */}
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

export default ProductHighlight;
