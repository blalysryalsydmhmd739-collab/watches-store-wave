"use client";

import Link from "next/link";
import { footerLinkGroups } from "@/lib/data";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-olive text-black">
      <div className="section-padding mx-auto max-w-container py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-black/25">
                <span className="text-[9px] font-bold tracking-ultra">Z</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">
                ZONATIME
              </span>
            </div>
            <address className="space-y-2 not-italic text-sm leading-relaxed text-black/75">
              <p>123 Luxury Avenue, Suite 500</p>
              <p>Geneva, Switzerland 1201</p>
              <p className="pt-2">
                <a href="tel:+41225551234" className="hover:text-black">
                  +41 22 555 1234
                </a>
              </p>
              <p>
                <a href="mailto:info@zonatime.com" className="hover:text-black">
                  info@zonatime.com
                </a>
              </p>
            </address>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/70 transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
              FOLLOW US
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:bg-black hover:text-olive"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/15 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
            <p className="text-xs text-black/60">
              &copy; {new Date().getFullYear()} Zonatime. All rights reserved.
            </p>
            <span className="hidden text-black/30 sm:inline" aria-hidden="true">
              |
            </span>
            <p className="text-xs text-black/55">
              Copyrights reserved to Wave-Belal Deyab
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-black/60 hover:text-black">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-black/60 hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
