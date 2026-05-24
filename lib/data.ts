import type {
  BrandLogo,
  FeatureCard,
  FeatureItem,
  FooterLinkGroup,
  GalleryItem,
  NavLink,
  Product,
  StatItem,
  Testimonial,
} from "@/types";
import { images } from "@/lib/images";

export const navLinks: NavLink[] = [
  { label: "SHOP", href: "#shop" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACTS", href: "#contacts" },
  { label: "BLOG", href: "#blog" },
  { label: "BENEFITS", href: "#benefits" },
];

export const featureCards: FeatureCard[] = [
  {
    id: "1",
    icon: "shield",
    title: "AUTHENTICITY PIECES GUARANTEED",
    description:
      "Every timepiece is verified for authenticity with certification and premium materials you can trust.",
  },
  {
    id: "2",
    icon: "diamond",
    title: "SEAMLESS SHOPPING EXPERIENCE",
    description:
      "From browsing to delivery, enjoy a refined luxury journey designed for discerning collectors.",
    highlighted: true,
  },
  {
    id: "3",
    icon: "clock",
    title: "CUSTOMER-CENTRIC SUPPORT",
    description:
      "Dedicated specialists guide your selection and provide attentive after-sales care at every step.",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Silver Link Classic",
    price: "$2,450",
    image: images.watches.watch1,
  },
  {
    id: "2",
    name: "Gold Leather Heritage",
    price: "$3,120",
    image: images.watches.watch2,
  },
  {
    id: "3",
    name: "All-Gold Prestige",
    price: "$4,890",
    image: images.watches.watch3,
  },
];

export const featureItems: FeatureItem[] = [
  {
    id: "1",
    icon: "design",
    title: "TIMELESS DESIGNS",
    description:
      "Iconic silhouettes that blend heritage craftsmanship with contemporary elegance.",
  },
  {
    id: "2",
    icon: "quality",
    title: "PREMIUM QUALITY",
    description:
      "Sapphire crystal, surgical-grade steel, and hand-finished dials built to last.",
  },
  {
    id: "3",
    icon: "service",
    title: "PRECISION ENGINEERING",
    description:
      "Meticulous movements and calibrated components for lasting accuracy.",
  },
  {
    id: "4",
    icon: "warranty",
    title: "INNOVATIVE TECHNOLOGY",
    description:
      "Modern complications and refined mechanics for the discerning collector.",
  },
  {
    id: "5",
    icon: "shipping",
    title: "PERFECT GIFT CHOICE",
    description:
      "Elegant packaging and curated selections ideal for any special occasion.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    caption: "UNIQUE DESIGNS",
    image: images.gallery.gallery1,
    tall: true,
  },
  {
    id: "2",
    caption: "CRAFTSMANSHIP",
    image: images.gallery.gallery2,
  },
  {
    id: "3",
    caption: "PRECISION",
    image: images.gallery.gallery3,
  },
  {
    id: "4",
    caption: "LUXURY PACKAGING",
    image: images.gallery.gallery4,
    tall: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Mitchell",
    text: "The craftsmanship exceeded my expectations. A truly premium experience from order to delivery.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Chen",
    text: "Zonatime delivered exactly what I wanted — elegant design and impeccable service throughout.",
    rating: 5,
  },
  {
    id: "3",
    name: "Marcus Williams",
    text: "I've purchased multiple pieces. Each watch is precise, beautiful, and built to last.",
    rating: 5,
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    text: "From unboxing to wearing, the quality is stunning. I recommend Zonatime without hesitation.",
    rating: 5,
  },
  {
    id: "5",
    name: "David Thompson",
    text: "The online experience made finding the perfect watch effortless. Fast, insured shipping too.",
    rating: 5,
  },
  {
    id: "6",
    name: "Amira Hassan",
    text: "A luxury experience start to finish. The team helped me choose a timepiece that fits perfectly.",
    rating: 5,
  },
];

export const brandLogos: BrandLogo[] = [
  { id: "1", name: "ROLEX" },
  { id: "2", name: "OMEGA" },
  { id: "3", name: "PATEK" },
  { id: "4", name: "CARTIER" },
  { id: "5", name: "TAG HEUER" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "Home", href: "#home" },
      { label: "Shop", href: "#shop" },
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contacts" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "Track Order", href: "#" },
    ],
  },
];

export const ctaStats: StatItem[] = [
  { value: "12 K+", label: "Products" },
  { value: "500 +", label: "Luxury Brands" },
];

export const progressStats = [
  { label: "Customer Satisfaction", value: 95 },
  { label: "Timely Deliveries", value: 98 },
];
