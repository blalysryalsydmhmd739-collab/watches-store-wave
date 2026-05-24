"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { SearchIcon } from "@/components/ui/Icons";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-md"
    >
      <div className="section-padding mx-auto flex max-w-container items-center justify-between py-4 lg:py-5">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-white/20">
            <span className="text-[9px] font-bold tracking-ultra text-white">Z</span>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            ZONATIME
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-widest text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#shop"
            className="hidden bg-olive px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90 sm:inline-flex"
          >
            GET STARTED
          </Link>
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-white/40"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
