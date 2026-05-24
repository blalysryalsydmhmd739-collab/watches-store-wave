"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
}

export function MotionSection({
  children,
  className = "",
  id,
  stagger = false,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger ? staggerContainer : fadeUpVariants}
    >
      {children}
    </motion.section>
  );
}

interface MotionItemProps {
  children: ReactNode;
  className?: string;
}

export function MotionItem({ children, className = "" }: MotionItemProps) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}
