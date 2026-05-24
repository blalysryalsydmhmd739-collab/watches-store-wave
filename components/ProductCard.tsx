"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col bg-[#1A1A1A]"
    >
      <div className="relative flex flex-1 items-center justify-center px-6 py-10">
        <div className="relative aspect-square w-full max-w-[220px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="280px"
            unoptimized
          />
        </div>
      </div>

      <div className="border-t border-white/5 px-6 pb-6 pt-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {product.name}
          </h3>
          <span className="text-sm font-semibold text-white">{product.price}</span>
        </div>
        <button type="button" className="btn-dark w-full">
          ADD TO CART
        </button>
      </div>
    </motion.article>
  );
}
