'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Tim ITERAHERO",
        message: "Melonnya luar biasa enak! Packing-nya juga rapi banget.",
        image: "/marketing/testimonial-1.png"
    },
    {
        name: "Pak Linuk, Lampung Timur",
        message: "Puas banget beli langsung dari petani. Dukungan untuk lokal!",
        image: "/marketing/testimonial-2.png"
    },
    {
        name: "Dosen, ITERA",
        message: "Langganan tiap panen. Melonnya besar, segar, dan manis!",
        image: "/marketing/testimonial-3.jpg"
    }
];

const TestimonialSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialRef = useRef<HTMLDivElement>(null);

    // Auto slide text
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonial" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Testimoni Pelanggan
                </h2>
                <div className="text-center">
                    {/* Displaying the image */}
                    <div className="overflow-hidden rounded-xl shadow-md mb-4">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                        />
                    </div>
                    {/* Displaying the name and message with sliding text */}
                    <div ref={testimonialRef} className="overflow-hidden">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-sm text-emerald-700 dark:text-[#8FCCB8]/90">
                            “{testimonials[currentIndex].message}”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
