"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

type Particle = {
    left: string;
    top: string;
    size: number;
    duration: number;
    delay: number;
};

const titleLine = "About Lambda";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.03 } },
};

const letter: Variants = {
    hidden: { y: -120, rotate: -8, opacity: 0 },
    show: {
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 12,
        },
    },
};

const wipeVariant: Variants = {
    hidden: {
        clipPath: "inset(0 100% 0 0)",
        filter: "brightness(0.5) blur(6px)",
    },
    show: {
        clipPath: "inset(0 0% 0 0)",
        filter: "brightness(1) blur(0px)",
        transition: {
            duration: 1.1,
            ease: [0.77, 0, 0.175, 1],
            delay: 0.45,
        },
    },
};

function FallingText({ text }: { text: string }) {
    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="inline-block"
        >
            {text.split("").map((char, i) => (
                <motion.span key={i} variants={letter} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

function HeroBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const arr = Array.from({ length: 25 }).map(() => ({
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            size: Math.random() * 5 + 2,
            duration: Math.random() * 12 + 12,
            delay: Math.random() * 5,
        }));
        setParticles(arr);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.18),transparent_65%)]" />

                {/* Slow moving glow blob */}
                <motion.div
                    className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, -60, 40, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating particles */}
                {particles.map((p, i) => (
                    <motion.span
                        key={i}
                        className="absolute rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, 15, -10, 0],
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
            {/* HERO-ONLY BACKGROUND */}
            <HeroBackground />

            {/* Content */}
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
                    <FallingText text={titleLine} />
                    <br />
                    <motion.span
                        variants={wipeVariant}
                        initial="hidden"
                        animate="show"
                        className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        IIT Hyderabad
                    </motion.span>
                </h1>

                <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed animate-blur-fade-in">
                    A collective of builders, thinkers, and innovators pushing the
                    boundaries of technology at the heart of IITH.
                </p>
            </div>
        </section>
    );
}