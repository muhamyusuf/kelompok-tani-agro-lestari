"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection: React.FC = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSendWhatsApp = () => {
        const phone = "6285187060932";
        const defaultText = `Halo, saya ${name} ingin menghubungi Agro Lestari.\n\nPesan:\n${message}`;
        const encodedText = encodeURIComponent(defaultText);
        const whatsappLink = `https://wa.me/${phone}?text=${encodedText}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <section id="kontak" className="py-16 px-4 relative">
            {/* Radial Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17362B] via-[#234D41]/70 to-[#8FCCB8]/20 blur-3xl opacity-30 rounded-full"></div>
            </div>

            {/* Form */}
            <div className="w-full max-w-xl mx-auto relative z-10">
                <Card className="bg-white/50 dark:bg-[#17362B] rounded-sm shadow-[#009963]/10 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Hubungi Kami
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nama</Label>
                            <Input
                                id="name"
                                placeholder="Nama Anda"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Pesan</Label>
                            <Textarea
                                id="message"
                                placeholder="Tulis pesan Anda di sini..."
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={handleSendWhatsApp}
                            className="w-full bg-[#009963] hover:bg-[#009963]/90 dark:text-white"
                        >
                            Kirim Pesan via WhatsApp
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ContactSection;
