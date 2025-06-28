import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17362B] via-[#234D41]/60 to-[#8FCCB8]/20 blur-3xl opacity-30 rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Rasakan Manisnya Melon Premium Kami
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                    Dapatkan melon langsung dari kebun Kelompok Tani Agro Lestari. Segar, alami, dan penuh nutrisi — pesan sekarang untuk pengalaman rasa terbaik!
                </p>
                <Button
                    className="bg-[#009963] hover:bg-[#009963]/90 px-6 py-3 text-white text-sm rounded-full"
                >
                    Pesan Sekarang
                </Button>
            </div>
        </section>
    );
};

export default CTASection;
