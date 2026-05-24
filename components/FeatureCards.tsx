"use client";

import Link from "next/link";
import { featureCards } from "@/lib/data";
import {
  ClockIcon,
  DiamondIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { MotionItem, MotionSection } from "@/components/ui/MotionSection";
import type { FeatureCard } from "@/types";

function FeatureIcon({
  icon,
  highlighted,
}: {
  icon: FeatureCard["icon"];
  highlighted?: boolean;
}) {
  const className = `h-7 w-7 ${highlighted ? "text-black" : "text-gold"}`;

  switch (icon) {
    case "shield":
      return <ShieldIcon className={className} />;
    case "diamond":
      return <DiamondIcon className={className} />;
    case "clock":
      return <ClockIcon className={className} />;
  }
}

export default function FeatureCards() {
  return (
    <MotionSection
      id="benefits"
      className="section-padding mx-auto max-w-container py-14 lg:py-20"
      stagger
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {featureCards.map((card) => (
          <MotionItem key={card.id}>
            <div
              className={`flex h-full min-h-[280px] flex-col p-8 lg:p-10 ${
                card.highlighted
                  ? "bg-olive text-black"
                  : "border border-card-border bg-card text-white"
              }`}
            >
              <div className="mb-6">
                <FeatureIcon icon={card.icon} highlighted={card.highlighted} />
              </div>
              <h3
                className={`mb-4 text-base font-bold uppercase leading-snug tracking-wide ${
                  card.highlighted ? "text-black" : "text-white"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`body-muted mb-8 flex-grow text-[13px] ${
                  card.highlighted ? "text-black/70" : ""
                }`}
              >
                {card.description}
              </p>
              <Link
                href="#about"
                className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
                  card.highlighted ? "text-black" : "text-gold"
                }`}
              >
                LEARN MORE
                <ArrowRightIcon
                  className={card.highlighted ? "text-black" : "text-gold"}
                />
              </Link>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
