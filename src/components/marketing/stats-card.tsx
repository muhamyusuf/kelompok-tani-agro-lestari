'use client'

import React, { useEffect, useState } from 'react';

const StatsCard = () => {
    const [percent, setPercent] = useState(0);
    const [growthRate, setGrowthRate] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Meningkatkan nilai secara bertahap
        const timer = setInterval(() => {
            if (percent < 100) setPercent(prev => prev + 1);
            if (growthRate < 70) setGrowthRate(prev => prev + 2);  // Tingkat pertumbuhan
            if (userCount < 10000) setUserCount(prev => prev + 500);  // Pengguna di Sumatera
        }, 50); // Sesuaikan interval waktu untuk peningkatan yang mulus

        return () => clearInterval(timer);  // Pembersihan saat komponen dibersihkan
    }, [percent, growthRate, userCount]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="flex flex-col items-center justify-center text-center px-4 py-8">
                <span className="text-4xl">{percent}%</span>
                <p className="opacity-90 mt-2 text-sm w-[70%]">Kepuasan dari 32 Greenhouse di Lampung Timur</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 py-8">
                <span className="text-4xl">{growthRate}%</span>
                <p className="opacity-90 mt-2 text-sm w-[70%]">Tingkat Pertumbuhan Tahunan di Sumatera</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 py-8">
                <span className="text-4xl">{userCount}+</span>
                <p className="opacity-90 mt-2 text-sm w-[70%]">Customer Mendapatkan Manfaat dari Agro Lestari</p>
            </div>
        </div>
    );
};

export default StatsCard;
