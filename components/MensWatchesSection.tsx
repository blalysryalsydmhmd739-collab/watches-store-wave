"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mensWatches } from "@/lib/watch-collections";
import WatchCollectionCard from "@/components/WatchCollectionCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export default function MensWatchesSection() {
  return (
    <section
      id="mens-watches"
      className="relative overflow-hidden bg-black py-20 lg:py-28"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="section-padding relative mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <span className="label-gold mb-3 block">MEN&apos;S COLLECTION</span>
            <h2 className="heading-lg max-w-xl text-white">
              BOLD PRECISION FOR THE MODERN GENTLEMAN
            </h2>
            <p className="body-muted mt-4 max-w-lg text-[13px]">
              Dark, refined timepieces crafted for strength and sophistication.
              Every detail engineered for distinction.
            </p>
          </div>
          <motion.div>
            <Link href="#shop" className="btn-primary">
              SHOP MEN&apos;S
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6"
        >
          {mensWatches.map((watch) => (
            <WatchCollectionCard key={watch.id} watch={watch} variant="men" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
