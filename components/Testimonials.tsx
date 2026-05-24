"use client";

import Link from "next/link";
import { testimonials } from "@/lib/data";
import { StarIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionItem, MotionSection } from "@/components/ui/MotionSection";

export default function Testimonials() {
  return (
    <MotionSection
      id="faq"
      className="section-padding mx-auto max-w-container py-16 lg:py-24"
      stagger
    >
      <SectionHeading
        title="REAL FEEDBACK FROM THOSE WHO TRUST US"
        align="center"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {testimonials.map((testimonial) => (
          <MotionItem key={testimonial.id}>
            <div className="flex h-full flex-col border border-card-border bg-card p-7 lg:p-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {testimonial.name}
                </h3>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-3 w-3 text-gold" />
                  ))}
                </div>
              </div>

              <p className="body-muted mb-6 flex-grow text-[13px]">
                {testimonial.text}
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gold"
              >
                READ MORE
                <ArrowRightIcon />
              </Link>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
