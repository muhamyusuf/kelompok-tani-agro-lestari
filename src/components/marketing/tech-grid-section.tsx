"use client";

import { Droplet, Sparkles, SunSnow, Leaf, Settings2, FlaskConical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const technologies = [
    {
        icon: <SunSnow className="w-6 h-6 text-emerald-600" />,
        title: "Greenhouse Terkontrol",
        description:
            "Mengontrol suhu, cahaya, dan kelembapan secara otomatis untuk menciptakan iklim ideal bagi tanaman sepanjang tahun.",
    },
    {
        icon: <Droplet className="w-6 h-6 text-emerald-600" />,
        title: "Irigasi Presisi",
        description:
            "Sistem irigasi tetes otomatis yang hemat air dan menyesuaikan dengan kebutuhan tanaman di tiap fase pertumbuhan.",
    },
    {
        icon: <Leaf className="w-6 h-6 text-emerald-600" />,
        title: "Hidroponik Nutrisi Seimbang",
        description:
            "Tanpa tanah—menggunakan larutan nutrisi yang dikontrol secara digital agar tanaman tumbuh optimal dan higienis.",
    },
    {
        icon: <Settings2 className="w-6 h-6 text-emerald-600" />,
        title: "Automasi Panen & Monitoring",
        description:
            "Sensor dan sistem otomatis memantau kelembapan, suhu, serta kondisi tanaman secara real-time untuk meningkatkan efisiensi.",
    },
    {
        icon: <FlaskConical className="w-6 h-6 text-emerald-600" />,
        title: "Sterilisasi & Keamanan",
        description:
            "Lingkungan tanam steril dari hama dan penyakit tanpa pestisida kimia untuk hasil yang lebih sehat dan ramah lingkungan.",
    },
    {
        icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
        title: "Kualitas Premium",
        description:
            "Dengan kontrol penuh dari benih hingga panen, kami memastikan hanya melon terbaik yang sampai ke tangan konsumen.",
    },
];

export default function TechGridSection() {
    return (
        <section id="teknologi" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                    Teknologi Pertanian di Agro Lestari
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
                    Kami menggunakan pendekatan berbasis sains dan teknologi mutakhir untuk memastikan pertumbuhan melon secara berkelanjutan, higienis, dan berkualitas tinggi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => (
                        <Card
                            key={idx}
                            className="border border-[#2E6B54]/30 dark:border-[#2E6B54] bg-white dark:bg-[#17362B] shadow-sm rounded-xl p-6 flex flex-col"
                        >
                            <div className="mb-4">{tech.icon}</div>
                            <CardHeader className="p-0">
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {tech.title}
                                </CardTitle>
                                <CardDescription className="mt-2 text-sm text-emerald-600 dark:text-emerald-300">
                                    {tech.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
