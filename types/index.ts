export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  id: string;
  icon: "shield" | "diamond" | "clock";
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  badge?: string;
  image: string;
}

export interface FeatureItem {
  id: string;
  icon: "design" | "quality" | "service" | "warranty" | "shipping" | "support";
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
  tall?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface BrandLogo {
  id: string;
  name: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CollectionWatch {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  tag?: string;
}
