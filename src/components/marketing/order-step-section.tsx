'use client';

import {
    ShoppingCart,
    MapPin,
    PhoneCall,
    ClipboardList,
    CheckCircle2,
    Handshake
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const umumSteps = [
    {
        icon: ShoppingCart,
        title: "Pilih Produk",
        description: "Telusuri jenis melon kami dan pilih produk sesuai selera Anda."
    },
    {
        icon: MapPin,
        title: "Datang ke Lokasi / Hubungi Kami",
        description: "Anda bisa langsung ke kebun atau hubungi kami untuk pemesanan satuan."
    }
];

const mitraSteps = [
    {
        icon: PhoneCall,
        title: "Hubungi Tim Kami",
        description: "Hubungi kami melalui kontak resmi untuk diskusi kemitraan."
    },
    {
        icon: ClipboardList,
        title: "Diskusi Kebutuhan & Penawaran",
        description: "Kami akan mengevaluasi kebutuhan Anda dan memberikan penawaran terbaik."
    },
    {
        icon: CheckCircle2,
        title: "Persetujuan & Legalitas",
        description: "Proses kesepakatan dilakukan dengan surat kerja sama dan kontrak formal."
    },
    {
        icon: Handshake,
        title: "Pengiriman & Kerja Sama",
        description: "Produk dikirim sesuai kesepakatan, dan kemitraan dimulai secara berkelanjutan."
    }
];

const OrderStepsTabs = () => {
    return (
        <section id="cara-pesan" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10">
                    Cara Pemesanan
                </h2>

                <Tabs defaultValue="umum" className="w-full">
                    <TabsList className="mx-auto mb-10">
                        <TabsTrigger value="umum">Untuk Umum</TabsTrigger>
                        <TabsTrigger value="mitra">Untuk Kemitraan</TabsTrigger>
                    </TabsList>

                    <TabsContent value="umum">
                        <div className="space-y-10">
                            {umumSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="flex items-start gap-5 text-left">
                                        <div className="flex-shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-800 p-3">
                                            <Icon className="w-5 h-5 text-emerald-700 dark:text-emerald-200" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>

                    <TabsContent value="mitra">
                        <div className="space-y-10">
                            {mitraSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="flex items-start gap-5 text-left">
                                        <div className="flex-shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-800 p-3">
                                            <Icon className="w-5 h-5 text-emerald-700 dark:text-emerald-200" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default OrderStepsTabs;
