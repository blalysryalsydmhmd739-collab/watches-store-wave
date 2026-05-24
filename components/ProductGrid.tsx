"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { MotionItem, MotionSection } from "@/components/ui/MotionSection";

export default function ProductGrid() {
  return (
    <MotionSection
      id="shop"
      className="section-padding mx-auto max-w-container py-16 lg:py-24"
      stagger
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <h2 className="heading-lg max-w-xl">
          DISCOVER WATCHES THAT SPEAK YOUR STYLE
        </h2>
        <Link href="#shop" className="btn-primary flex-shrink-0">
          VIEW ALL PRODUCTS
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <MotionItem key={product.id}>
            <ProductCard product={product} />
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
