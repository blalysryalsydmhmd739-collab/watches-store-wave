"use client";

import Image from "next/image";
import Link from "next/link";
import { ctaStats } from "@/lib/data";
import { images } from "@/lib/images";
import { MotionSection } from "@/components/ui/MotionSection";

export default function ShopNowCTA() {
  return (
    <MotionSection className="section-padding mx-auto max-w-container py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="heading-lg mb-8 max-w-md">
            SHOP NOW AND EMBRACE ELEGANCE
          </h2>

          <div className="mb-10 flex flex-wrap gap-12">
            {ctaStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link href="#shop" className="btn-primary">
            EXPLORE OUR COLLECTION
          </Link>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={images.hero.ctaWoman}
            alt="Woman wearing a luxury watch"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="heading-md text-white">STYLE MEETS FUNCTION</p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
