'use client';

import {
    ShoppingCart,
    CreditCard,
    CheckCircle2,
    Truck
} from "lucide-react";

const steps = [
    {
        icon: ShoppingCart,
        title: "Pilih Produk",
        description: "Telusuri katalog melon premium kami dan pilih produk sesuai kebutuhan Anda."
    },
    {
        icon: CreditCard,
        title: "Lakukan Pemesanan",
        description: "Klik tombol 'Pesan Sekarang' dan isi formulir pemesanan dengan lengkap."
    },
    {
        icon: CheckCircle2,
        title: "Konfirmasi & Pembayaran",
        description: "Kami akan menghubungi Anda untuk konfirmasi. Lanjutkan dengan pembayaran via metode pilihan."
    },
    {
        icon: Truck,
        title: "Pengiriman Segera",
        description: "Produk dikirim langsung dari kebun kami di hari yang sama agar tetap segar."
    }
];

const OrderStepsSection = () => {
    return (
        <section id="cara-pesan" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                    Cara Pemesanan
                </h2>
                <div className="space-y-10">
                    {steps.map((step, index) => {
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
            </div>
        </section>
    );
};

export default OrderStepsSection;
