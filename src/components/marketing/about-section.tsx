'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Info, X } from 'lucide-react';

const contents = [
    {
        title: 'Budidaya Melon Premium',
        subtitle: 'berbasis kualitas dan keberlanjutan',
        image: '/marketing/hero-image.png',
        thumbs: [1011, 1021, 1031],
        description:
            'Melon Agro Lestari adalah kelompok tani berdedikasi di Lampung Timur yang fokus pada budidaya melon premium berkualitas tinggi. Kami mengutamakan praktik pertanian berkelanjutan dan berkomitmen menghasilkan buah yang sehat, manis, dan bermutu.',
    },
    {
        title: 'Greenhouse Modern',
        subtitle: 'dengan pengaturan nutrisi cerdas',
        image: '/marketing/greenhouses.png',
        thumbs: [1041, 1051, 1061],
        description:
            'Kami menggunakan greenhouse dengan sistem kontrol iklim dan nutrisi otomatis untuk menjaga kondisi pertumbuhan yang optimal. Teknologi ini memastikan buah melon tumbuh dengan rasa dan ukuran terbaik.',
    },
    {
        title: 'Distribusi Terintegrasi',
        subtitle: 'hingga ke konsumen akhir',
        image: '/marketing/delivery.png',
        thumbs: [1071, 1081, 1091],
        description:
            'Proses distribusi kami dilakukan secara profesional, mulai dari pemanenan hingga pengemasan dan pengiriman. Kami memastikan setiap buah tiba di tangan konsumen dalam kondisi terbaik.',
    },
    {
        title: 'Petani Lokal Berdaya',
        subtitle: 'melalui kolaborasi dan pelatihan',
        image: '/marketing/team.png',
        thumbs: [1101, 1102, 1103],
        description:
            'Kami bekerja sama dengan petani lokal dan memberikan pelatihan berkelanjutan agar mereka dapat menerapkan praktik terbaik dalam budidaya melon. Tujuan kami adalah tumbuh bersama komunitas.',
    },
];

const AboutSection: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % contents.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="tentang" className="py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 overflow-hidden">
                {/* Gambar besar kiri full height dengan zoom effect */}
                <div className="md:w-1/2 w-full h-auto md:h-auto flex">
                    <div
                        className="rounded-2xl overflow-hidden shadow-xl w-full h-full group cursor-zoom-in"
                        onClick={() => setIsOpen(true)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={contents[index].image}
                                    alt={contents[index].title}
                                    width={700}
                                    height={700}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-105"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Konten kanan */}
                <div className="md:w-1/2 w-full flex flex-col justify-center">
                    <p className="text-sm text-emerald-500 font-medium mb-1 flex items-center gap-2">
                        <Info />
                        <span>Tentang Kami</span>
                    </p>

                    <motion.h2
                        key={'title-' + index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6 leading-9 mt-2"
                    >
                        {contents[index].title}
                        <br />
                        {contents[index].subtitle}
                    </motion.h2>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {contents[index].thumbs.map((id, idx) => (
                            <div key={`thumb-${idx}`}>
                                <Image
                                    src={`https://picsum.photos/id/${id}/300/200`}
                                    alt={`Gambar ${idx + 1}`}
                                    width={300}
                                    height={200}
                                    className="rounded-xl object-cover w-full h-[110px]"
                                />
                                <p className="text-xs text-center mt-1 text-gray-500 dark:text-gray-300">
                                    [{String(idx + 1).padStart(2, '0')}]
                                </p>
                            </div>
                        ))}
                    </div>

                    <motion.p
                        key={'desc-' + index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                        {contents[index].description}
                    </motion.p>
                </div>
            </div>

            {/* Dialog Zoom */}
            <AnimatePresence>
                {isOpen && (
                    <Dialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    >
                        <Dialog.Panel className="relative max-w-4xl w-full">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 z-10 p-2 bg-white/90 rounded-full shadow hover:bg-white"
                            >
                                <X className="w-5 h-5 text-gray-800" />
                            </button>
                            <Image
                                src={contents[index].image}
                                alt={contents[index].title}
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </Dialog.Panel>
                    </Dialog>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AboutSection;
