import React from "react";

const testimonials = [
    {
        name: "Dian, Tangerang",
        message: "Melonnya luar biasa enak! Packing-nya juga rapi banget.",
        image: "https://picsum.photos/200/300"
    },
    {
        name: "Pak Budi, Bekasi",
        message: "Langganan tiap minggu. Anak-anak suka banget!",
        image: "https://picsum.photos/200/300"
    },
    {
        name: "Yuni, Jogja",
        message: "Puas banget beli langsung dari petani. Dukungan untuk lokal!",
        image: "https://picsum.photos/200/300"
    }
];

const TestimonialSection: React.FC = () => {
    return (
        <section id="testimonial" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Testimoni Pelanggan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="text-left">
                            <div className="overflow-hidden rounded-xl shadow-md mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {item.name}
                            </h3>
                            <p className="text-sm text-emerald-700 dark:text-[#8FCCB8]/90">
                                “{item.message}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
