"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/data";
import { MotionItem, MotionSection } from "@/components/ui/MotionSection";

export default function VisualGallery() {
  return (
    <MotionSection
      id="blog"
      className="section-padding mx-auto max-w-container py-16 lg:py-24"
      stagger
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <h2 className="heading-lg max-w-xl">
          DISCOVER THE PERFECT WATCH DESIGNED FOR YOU
        </h2>
        <Link href="#shop" className="btn-primary flex-shrink-0">
          EXPLORE OUR BRANDS
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:gap-5">
        {galleryItems.map((item) => (
          <MotionItem key={item.id}>
            <div
              className={`group relative min-h-[220px] overflow-hidden ${
                item.tall
                  ? "aspect-[3/4] sm:row-span-2 sm:min-h-full"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  {item.caption}
                </span>
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
