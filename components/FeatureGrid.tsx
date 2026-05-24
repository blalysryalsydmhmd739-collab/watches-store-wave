"use client";

import { featureItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionItem, MotionSection } from "@/components/ui/MotionSection";

function FeatureIcon({ type }: { type: string }) {
  const className = "h-5 w-5 text-olive";

  const icons: Record<string, JSX.Element> = {
    design: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    quality: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    service: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-2.017-1.125-3.813-2.886-4.741L12 12l2.886-1.618A4.502 4.502 0 0012 5.5V4.5" />
      </svg>
    ),
    warranty: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    shipping: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5V11.25m18 0V8.25A2.25 2.25 0 0018.75 6H5.25A2.25 2.25 0 003 8.25v3m18 0H3m0 0l1.5-4.5M12 3v8.25" />
      </svg>
    ),
  };

  return icons[type] ?? icons.design;
}

export default function FeatureGrid() {
  return (
    <MotionSection
      id="services"
      className="section-padding mx-auto max-w-container py-16 lg:py-24"
      stagger
    >
      <SectionHeading title="EXPERIENCE PRECISION AND ELEGANCE IN EVERY WATCH" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-12">
        {featureItems.map((item) => (
          <MotionItem key={item.id}>
            <div className="flex gap-4">
              <div className="mt-0.5 flex-shrink-0">
                <FeatureIcon type={item.icon} />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="body-muted text-[13px]">{item.description}</p>
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
