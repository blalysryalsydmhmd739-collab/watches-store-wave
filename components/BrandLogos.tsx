"use client";

import { brandLogos } from "@/lib/data";
import { MotionSection } from "@/components/ui/MotionSection";

export default function BrandLogos() {
  return (
    <MotionSection className="section-padding mx-auto max-w-container border-y border-card-border py-12 lg:py-16">
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:justify-between">
        {brandLogos.map((brand) => (
          <div
            key={brand.id}
            className="text-lg font-bold uppercase tracking-[0.3em] text-white/20 transition-colors duration-300 hover:text-white/40 md:text-xl"
          >
            {brand.name}
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
