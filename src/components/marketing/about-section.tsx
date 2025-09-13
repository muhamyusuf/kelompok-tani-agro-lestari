'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

const content = {
    title: 'Budidaya Melon Premium',
    subtitle: 'berbasis kualitas dan keberlanjutan',
    image: '/marketing/ibu-ibu.jpg',
    thumbs: ['/marketing/about-1.jpg', '/marketing/about-2.jpg', '/marketing/about-3.jpg'],
    description:
        'Melon Agro Lestari adalah kelompok tani berdedikasi di Lampung Timur yang fokus pada budidaya melon premium berkualitas tinggi. Kami mengutamakan praktik pertanian berkelanjutan dan berkomitmen menghasilkan buah yang sehat, manis, dan bermutu.',
};

const AboutSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="tentang" className="py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 overflow-hidden">
                {/* Gambar besar kiri full height dengan zoom effect */}
                <div className="md:w-1/2 w-full h-auto md:h-auto flex">
                    <div
                        className="rounded-sm overflow-hidden shadow-xl w-full h-full group cursor-zoom-in"
                        onClick={() => setIsOpen(true)}
                    >
                        <Image
                            src={content.image}
                            alt={content.title}
                            width={700}
                            height={700}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Konten kanan */}
                <div className="md:w-1/2 w-full flex flex-col justify-center">
                    <p className="text-sm text-emerald-500 font-medium mb-1 flex items-center gap-2">
                        <span>Tentang Kami</span>
                    </p>

                    <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6 leading-9 mt-2">
                        {content.title}
                        <br />
                        {content.subtitle}
                    </h2>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {content.thumbs.map((id, idx) => (
                            <div key={`thumb-${idx}`}>
                                <Image
                                    src={id}
                                    alt={`Gambar ${idx + 1}`}
                                    width={300}
                                    height={200}
                                    className="rounded-sm object-cover w-full h-[110px]"
                                    loading="lazy"
                                />
                                <p className="text-xs text-center mt-1 text-gray-500 dark:text-gray-300">
                                    [{String(idx + 1).padStart(2, '0')}]
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {content.description}
                    </p>
                </div>
            </div>

            {/* Dialog Zoom */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <Dialog.Panel className="relative max-w-4xl w-full">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-3 right-3 z-10 p-2 bg-white/90 rounded-full shadow hover:bg-white"
                    >
                        <X className="w-5 h-5 text-gray-800" />
                    </button>
                    <Image
                        src={content.image}
                        alt={content.title}
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain rounded-xl"
                        loading="lazy"
                    />
                </Dialog.Panel>
            </Dialog>
        </section>
    );
};

export default AboutSection;
