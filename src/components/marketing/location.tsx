'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
    return (
        <section className="bg-emerald-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-sm text-white/80 text-center w-full justify-center font-medium mb-1 flex items-center gap-2">
                    <MapPin />
                    <span>Location</span>
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
                    Lokasi Budidaya Melon Agro Lestari
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Google Maps */}
                    <div className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-xl border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d993.4346513741154!2d105.69769892849231!3d-5.145720663975516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDgnNDQuNiJTIDEwNcKwNDEnNTQuMCJF!5e0!3m2!1sen!2sid!4v1758097609180!5m2!1sen!2sid"
                            className="w-full h-[300px] md:h-[400px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Kelompok Tani Agro Lestari"
                        ></iframe>
                    </div>

                    {/* Info Lokasi */}
                    <div className="w-full md:w-1/3 text-center md:text-left flex flex-col justify-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-green-200 mb-4">
                            Alamat Lokasi
                        </h3>
                        <p className="text-sm sm:text-base text-green-100 leading-relaxed mb-6">
                            Desa Labuhan Ratu VII, Kecamatan Labuhan Ratu, Kabupaten Lampung Timur, Provinsi Lampung, Indonesia.
                        </p>

                        <a
                            href="https://www.google.com/maps/place/?q=place_id:Cdt-sphzZuZOOthg2CGfPQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-white/20 hover:bg-white/40 text-white transition-colors"
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
