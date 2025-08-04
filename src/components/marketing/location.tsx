'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
    return (
        <section className="bg-emerald-50 dark:bg-emerald-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 dark:text-white text-center mb-10">
                    Lokasi Budidaya Melon Agro Lestari
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Google Maps */}
                    <div className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-lg border border-emerald-200 dark:border-emerald-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1986.869361032867!2d105.69760147110848!3d-5.145701999543158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDgnNDQuNSJTIDEwNcKwNDEnNTQuMSJF!5e0!3m2!1sen!2sid!4v1754283128362!5m2!1sen!2sid"
                            className="w-full h-[300px] md:h-[400px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Info Lokasi */}
                    <div className="w-full md:w-1/3 text-center md:text-left flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-emerald-800 dark:text-emerald-100 mb-4">
                            Alamat Lokasi
                        </h3>
                        <p className="text-sm sm:text-base text-emerald-700 dark:text-emerald-200 leading-relaxed mb-6">
                            Desa Labuhan Ratu VII, Kecamatan Labuhan Ratu, Kabupaten Lampung Timur, Provinsi Lampung, Indonesia.
                        </p>

                        <a
                            href="https://www.google.com/maps/place/?q=place_id:Cdt-sphzZuZOOthg2CGfPQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow"
                        >
                            <MapPin className="w-5 h-5" />
                            Lihat di Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
