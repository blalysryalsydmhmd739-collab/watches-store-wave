"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const stats = [
  { value: "125 K+", label: "Satisfied Customers" },
  { value: "500+", label: "Premium Styles" },
  { value: "98%", label: "On-Time Delivery" },
];

const sideWatches = [
  { src: images.hero.accent1, alt: "Seiko Presage" },
  { src: images.hero.accent2, alt: "Omega Seamaster" },
  { src: images.hero.accent3, alt: "Blue Chronograph" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-24 lg:min-h-[90vh] lg:pt-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <motion.div
        className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-olive/10 blur-[100px]"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="section-padding relative mx-auto max-w-container pb-16 lg:pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Left — copy */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -28 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
            }}
          >
            <span className="label-gold mb-5 block">PREMIUM WATCHES</span>
            <h1 className="heading-xl mb-8 max-w-[420px] leading-[1.15]">
              DISCOVER WATCHES THAT DEFINE YOUR STYLE
            </h1>
            <p className="body-muted mb-10 max-w-md text-[15px]">
              Timeless craftsmanship meets modern elegance. Explore curated
              collections for every moment that matters.
            </p>
            <div className="mb-12 flex flex-wrap gap-3">
              <Link href="#shop" className="btn-primary">
                SHOP NOW
              </Link>
              <Link href="#about" className="btn-outline">
                LEARN MORE
              </Link>
            </div>

            {/* Inline stats */}
            <motion.div
              className="flex flex-wrap gap-8 border-t border-white/10 pt-8"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xl font-bold text-white lg:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — watch showcase */}
          <motion.div
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
            variants={{
              hidden: { opacity: 0, scale: 0.94 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          >
            {/* Main watch */}
            <motion.div
              className="relative mx-auto aspect-square w-full max-w-[460px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-[8%] rounded-full bg-gold/10 blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src={images.hero.watch}
                alt="Luxury gold watch"
                fill
                priority
                className="relative z-10 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                sizes="(max-width: 768px) 100vw, 460px"
                unoptimized
              />
            </motion.div>

            {/* Side watch cards — dark product shots only */}
            <div className="absolute -right-2 top-8 hidden flex-col gap-3 lg:flex">
              {sideWatches.map((item, i) => (
                <motion.div
                  key={item.alt}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: -4 }}
                  className="relative h-[72px] w-[72px] overflow-hidden border border-white/10 bg-black shadow-lg"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="72px"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mx-auto mt-6 flex max-w-[320px] items-center justify-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm lg:mx-0 lg:ml-auto lg:mr-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                Authenticity Guaranteed on Every Piece
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quick category links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4 border-t border-white/5 pt-10 lg:justify-start"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">
            Explore:
          </span>
          <Link
            href="#mens-watches"
            className="border border-white/15 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:border-gold hover:text-gold"
          >
            Men&apos;s
          </Link>
          <Link
            href="#womens-watches"
            className="border border-rose-400/30 bg-rose-500/10 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-rose-100 transition-all hover:border-rose-300 hover:bg-rose-500/20"
          >
            Women&apos;s
          </Link>
          <Link
            href="#shop"
            className="border border-white/15 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:border-gold hover:text-gold"
          >
            New Arrivals
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
