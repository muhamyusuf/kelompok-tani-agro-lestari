import React from "react";

const products = [
    {
        name: "Melon Super (1 Kg)",
        description: "Melon super segar, berat 1 kg.",
        image: "/marketing/hero-image.png"
    },
    {
        name: "Paket Hemat 3 Kg",
        description: "Paket hemat berisi 3 kg melon pilihan.",
        image: "/marketing/hero-image.png"
    },
    {
        name: "Paket Eksklusif 5 Kg",
        description: "Paket eksklusif berisi 5 kg melon premium.",
        image: "/marketing/hero-image.png"
    }
];

const ProductHighlight: React.FC = () => {
    return (
        <section id="produk" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Produk Unggulan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="text-left">
                            <div className="overflow-hidden rounded-xl shadow-md mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-emerald-700 dark:text-[#8FCCB8]">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductHighlight;
