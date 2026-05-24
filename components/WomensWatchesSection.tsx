"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { womensWatches } from "@/lib/watch-collections";
import WatchCollectionCard from "@/components/WatchCollectionCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function WomensWatchesSection() {
  return (
    <section
      id="womens-watches"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#4A1942] via-[#7B2869] to-[#D4A574]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,182,193,0.25),transparent_45%)]" />
      <motion.div
        className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-padding relative mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-ultra text-rose-100">
              WOMEN&apos;S COLLECTION
            </span>
            <h2 className="heading-lg max-w-xl text-white">
              ELEGANCE IN EVERY SHADE OF BEAUTY
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-rose-50/80">
              Delicate designs in rose gold, emerald, and pearl. Timepieces that
              celebrate grace, color, and timeless femininity.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#shop"
              className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-widest text-[#7B2869] transition-colors hover:bg-rose-50"
            >
              SHOP WOMEN&apos;S
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
        >
          {womensWatches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <WatchCollectionCard watch={watch} variant="women" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
