'use client';

import { useState } from "react";
import { blogs } from "#site/content";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const BlogSection = () => {
    const [zoomIndex, setZoomIndex] = useState<number | null>(null);

    // Ambil 3 blog terakhir yang sudah dipublikasikan
    const recentBlogs = blogs
        .filter((blog) => blog.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3); // ambil 3 terbaru

    return (
        <section id="blog" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Artikel & Blog Terbaru
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {recentBlogs.map((post, idx) => (
                        <div
                            key={post.slug}
                            onClick={() => (window.location.href = `/${post.slug}`)}
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
                                    src={post.thumbnail || "https://picsum.photos/600"}
                                    alt={post.title}
                                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    {post.description || "Baca selengkapnya tentang melon premium kami."}
                                </p>
                                <Button
                                    asChild
                                    className="bg-[#009963] hover:bg-[#009963]/90 text-white text-sm rounded-full px-4 py-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Link href={`/${post.slug}`}>Baca Selengkapnya</Link>
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
                            src={
                                recentBlogs[zoomIndex].thumbnail || "https://picsum.photos/600"
                            }
                            alt={recentBlogs[zoomIndex].title}
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
