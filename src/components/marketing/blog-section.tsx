'use client';

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
    {
        title: "Manfaat Buah Melon untuk Kesehatan",
        excerpt: "Melon mengandung vitamin A dan C yang baik untuk kulit dan sistem imun.",
        image: "https://picsum.photos/600",
        link: "/blog/manfaat-melon"
    },
    {
        title: "Cara Menyimpan Melon agar Tetap Segar",
        excerpt: "Tips menyimpan melon agar tahan lebih lama dan tetap juicy.",
        image: "https://picsum.photos/600",
        link: "/blog/menyimpan-melon"
    },
    {
        title: "Melon Agro Lestari: Dari Kebun ke Meja",
        excerpt: "Cerita perjalanan melon premium dari Lampung Timur ke rumah Anda.",
        image: "https://picsum.photos/600",
        link: "/blog/perjalanan-melon"
    }
];

const BlogSection: React.FC = () => {
    const [zoomIndex, setZoomIndex] = useState<number | null>(null);

    return (
        <section id="blog" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Artikel & Blog
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <div
                            key={idx}
                            onClick={() => (window.location.href = post.link)}
                            className="text-left border border-[#2E6B54]/30 dark:border-[#2E6B54] p-4 rounded-xl bg-white dark:bg-[#17362B] flex flex-col justify-between cursor-pointer group"
                        >
                            <div
                                className="overflow-hidden rounded-xl shadow-md mb-4"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setZoomIndex(idx);
                                }}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    {post.excerpt}
                                </p>
                                <Button
                                    asChild
                                    className="bg-[#009963] hover:bg-[#009963]/90 text-white text-sm rounded-full px-4 py-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <a href={post.link}>Baca Selengkapnya</a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {zoomIndex !== null && (
                    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
                        <button
                            onClick={() => setZoomIndex(null)}
                            className="absolute top-5 right-5 text-white"
                            aria-label="Tutup"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <img
                            src={blogPosts[zoomIndex].image}
                            alt={blogPosts[zoomIndex].title}
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
