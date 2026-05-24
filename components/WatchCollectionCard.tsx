"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CollectionWatch } from "@/types";

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface WatchCollectionCardProps {
  watch: CollectionWatch;
  variant: "men" | "women";
}

export default function WatchCollectionCard({
  watch,
  variant,
}: WatchCollectionCardProps) {
  const isMen = variant === "men";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex h-full flex-col overflow-hidden transition-shadow duration-500 ${
        isMen
          ? "border border-white/5 bg-[#0F0F0F] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:border-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          : "border border-rose-200/20 bg-white/10 shadow-lg backdrop-blur-md hover:border-rose-200/40 hover:shadow-[0_20px_50px_rgba(190,80,120,0.25)]"
      }`}
    >
      <motion.div
        className={`relative aspect-[4/5] overflow-hidden ${
          isMen ? "bg-black" : "bg-gradient-to-br from-rose-100/10 to-purple-200/10"
        }`}
      >
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={watch.image}
            alt={watch.name}
            fill
            className={`object-cover ${isMen ? "object-center" : "object-center"}`}
            sizes="(max-width: 768px) 100vw, 280px"
            unoptimized
          />
        </motion.div>
        {watch.tag && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`absolute left-4 top-4 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest ${
              isMen
                ? "bg-black/70 text-gold backdrop-blur-sm"
                : "bg-rose-500/80 text-white backdrop-blur-sm"
            }`}
          >
            {watch.tag}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="flex flex-1 flex-col p-5"
        initial={false}
        whileHover={{ backgroundColor: isMen ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.08)" }}
      >
        <p
          className={`mb-1 text-[10px] font-semibold uppercase tracking-widest ${
            isMen ? "text-gold" : "text-rose-200"
          }`}
        >
          {watch.brand}
        </p>
        <h3
          className={`mb-3 text-sm font-bold uppercase tracking-wide ${
            isMen ? "text-white" : "text-white"
          }`}
        >
          {watch.name}
        </h3>
        <motion.p
          className={`mb-5 text-lg font-semibold ${isMen ? "text-white" : "text-rose-50"}`}
          whileHover={{ scale: 1.02 }}
        >
          {watch.price}
        </motion.p>
        <Link
          href="#shop"
          className={`mt-auto inline-flex w-full items-center justify-center px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
            isMen
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white hover:from-rose-300 hover:to-fuchsia-400"
          }`}
        >
          ADD TO CART
        </Link>
      </motion.div>
    </motion.article>
  );
}
