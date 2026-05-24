"use client";

import Image from "next/image";
import Link from "next/link";
import { progressStats } from "@/lib/data";
import { images } from "@/lib/images";
import { MotionSection } from "@/components/ui/MotionSection";
import { motion } from "framer-motion";

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-white">{label}</span>
        <span className="text-sm font-semibold text-olive">{value}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden bg-[#1F1F1F]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full bg-olive"
        />
      </div>
    </div>
  );
}

export default function PrecisionSection() {
  return (
    <MotionSection
      id="about"
      className="section-padding mx-auto max-w-container py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative min-h-[420px] w-full overflow-hidden lg:min-h-[520px]">
          <Image
            src={images.hero.precision}
            alt="Wrist wearing a premium watch"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-amber-950/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="heading-md text-center text-white">
              PRECISION IN EVERY DETAIL
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="label-gold mb-4 block">CHOOSE THE BEST QUALITY</span>
          <h2 className="heading-lg mb-8 max-w-md">
            PRECISION, STYLE, AND UNMATCHED SERVICE
          </h2>

          {progressStats.map((stat) => (
            <ProgressBar key={stat.label} label={stat.label} value={stat.value} />
          ))}

          <Link href="#about" className="btn-primary mt-2">
            LEARN MORE ABOUT US
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
