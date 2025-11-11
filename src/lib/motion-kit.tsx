// src/lib/motion-kit.tsx
import { motion, Variants, MotionConfig } from "framer-motion";
import React from "react";

export const ease = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const stagger = (gap = 0.12) => ({
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: gap } },
});

/** Reveal once when it scrolls into view */
export function Reveal({
    children, variants = fadeUp, delay = 0, className = "",
}: { children: React.ReactNode; variants?: Variants; delay?: number; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

/** Group that staggers its children */
export function Stagger({
    children, gap = 0.12, className = "",
}: { children: React.ReactNode; gap?: number; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={stagger(gap)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

/** Optional wrapper to respect reduced motion */
export function MotionRoot({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
