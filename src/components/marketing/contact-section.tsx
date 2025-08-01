"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection: React.FC = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState<number>(0);

    // Generate new challenge
    const generateChallenge = () => {
        const operators = ["+", "-", "*", "/"];
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = operators[Math.floor(Math.random() * operators.length)];

        let result = 0;
        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = parseFloat((num1 / num2).toFixed(2)); break;
        }

        setQuestion(`${num1} ${operator} ${num2}`);
        setCorrectAnswer(result);
        setAnswer("");
        setShowModal(true);
    };

    const handleSendWhatsApp = () => {
        generateChallenge();
    };

    const confirmValidation = () => {
        const parsed = parseFloat(answer);
        const isCorrect = question.includes("/") ? Math.abs(parsed - correctAnswer) < 0.1 : parsed === correctAnswer;

        if (!isCorrect) {
            showNotification("Jawaban salah. Silakan coba lagi!", "error");
            setShowModal(false);
            return;
        }

        const phone = "62813696744";
        const defaultText = `Halo, saya ${name} ingin menghubungi Agro Lestari.\n\nPesan:\n${message}`;
        const encodedText = encodeURIComponent(defaultText);
        const whatsappLink = `https://wa.me/${phone}?text=${encodedText}`;
        window.open(whatsappLink, "_blank");

        showNotification("Pesan berhasil diarahkan ke WhatsApp!", "success");
        setShowModal(false);
    };

    return (
        <section id="kontak" className="py-16 px-4 relative">
            {/* Background */}
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

            {/* Custom Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
                    <div className="bg-white dark:bg-[#17362B] p-6 rounded-lg shadow-xl max-w-sm w-full space-y-4 text-center">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Validasi Anti-Bot</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Berapa hasil dari <strong>{question}</strong>?
                        </p>
                        <Input
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Jawaban Anda"
                            type="text"
                        />
                        <div className="flex gap-2 justify-center mt-2">
                            <Button
                                onClick={confirmValidation}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
                            >
                                Kirim
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setShowModal(false)}
                                className="border text-gray-700 dark:text-white"
                            >
                                Batal
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// 🔔 Notifikasi Toast
function showNotification(message: string, type: "success" | "error") {
    const color = type === "success" ? "#059669" : "#F43F5E";
    const text = type === "success" ? "✅ Sukses" : "❌ Gagal";

    const toast = document.createElement("div");
    toast.textContent = `${text}: ${message}`;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.zIndex = "9999";
    toast.style.backgroundColor = color;
    toast.style.color = "white";
    toast.style.padding = "12px 16px";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "14px";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

export default ContactSection;
