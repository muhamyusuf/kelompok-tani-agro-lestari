import Image from "next/image";
import React from "react";

const products = [
    {
        name: "Melon Intanon",
        description: "Melon varietas unggulan dengan rasa segar dan manis khas.",
        image: "/marketing/intanon-melon.png"
    },
    {
        name: "Golden Melon",
        description: "Golden Melon premium berwarna kuning keemasan dengan daging tebal.",
        image: "/marketing/golden-melon.png"
    },
    {
        name: "Sweet Melon",
        description: "Melon manis alami cocok untuk semua kalangan dan cuaca tropis.",
        image: "/marketing/sweet-melon.png"
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
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={1080}
                                    height={1080}
                                    className="w-full h-80 object-cover"
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
