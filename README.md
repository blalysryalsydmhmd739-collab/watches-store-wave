# Zonatime — Premium Luxury Watch Store Template

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-purple?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)

Welcome to **Zonatime**, an ultra-premium, dark-themed luxury watch e-commerce landing page template designed specifically for high-end watch retailers, boutique shops, horology brands, and luxury collectors. Built using the latest web development standards: **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for state-of-the-art interactive micro-animations and smooth scroll experiences.

This template is fully optimized for speed, SEO, responsiveness, and visual excellence, matching the highest quality standards required by **TemplateMonster**.

---

## 🌟 Key Features

- 💎 **Elite Dark Gold & Rose Aesthetic**: Elegant dark theme accented with luxurious gold and rose-gold hues, tailored for high-ticket luxury products.
- 📱 **100% Fully Responsive Layout**: Built with a mobile-first philosophy, adapting seamlessly to all screen sizes (mobiles, tablets, laptops, and ultra-wide screens).
- 🎬 **Premium Interactive Micro-Animations**: Smooth scroll-triggered animations, interactive parallax collections, floating watch showcases, and subtle ambient glows powered by Framer Motion.
- 🛍️ **Modular Section Showcase**:
  - **Dynamic Hero Section**: Floating main watch showcase, live client/collection statistics, side-accent watches, and quick filter links.
  - **Feature/Benefits Cards**: Highlighting quality, authenticity guarantees, and shipping.
  - **Precision Section**: Displaying details about watch movements and engineering quality with a circular progress indicator.
  - **Brand Showcase**: Minimalist scrolling brand logos (Rolex, Omega, Cartier, etc.).
  - **Featured Product Grid**: Highlights top-tier timepieces with modern design cards.
  - **Gender-Categorized Sections**: Separate, dedicated tabs and cards for Men's and Women's collections.
  - **Visual Masonry Gallery**: Luxurious collage of high-resolution lifestyle images showing products in use.
  - **Interactive Testimonial Carousel**: Multi-item user review block with ratings and descriptions.
  - **Shop Now CTA & Footer**: High-conversion call-to-action sections with quick site navigation links.
- ⚡ **SEO & Performance Optimized**: Utilizes the Next.js `next/image` component for lazy loading, WebP/AVIF format optimization, dynamic fonts via Google Fonts (`Plus Jakarta Sans`), and structured OpenGraph metadata.
- 🔧 **Automatic Asset Syncing & Verification**: Custom scripts included to sync and check reference assets automatically before build.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14.2 (App Router)](https://nextjs.org/)
- **Core Library**: [React 18.3](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Animations**: [Framer Motion 11.1](https://www.framer.com/motion/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/) (for high-performance image processing)
- **Formatting & Linting**: ESLint, Prettier

---

## 📁 File Structure

The project has a highly organized, modular folder structure that makes customization straightforward:

```bash
zonatime/
├── app/                      # Next.js App Router (Layouts & Main Page)
│   ├── globals.css           # Global CSS variables, custom styles & font definitions
│   ├── layout.tsx            # Global layout configuration, Metadata, and Fonts
│   └── page.tsx              # Main entry point importing component sections
├── components/               # Reusable React components
│   ├── ui/                   # Shared UI primitives (Icons, Animators, Headings)
│   │   ├── Icons.tsx         # SVG icons (shield, clock, diamond, search, etc.)
│   │   ├── MotionSection.tsx # Framer Motion wrapper for slide/fade scroll effects
│   │   └── SectionHeading.tsx# Uniform styled section titles
│   ├── BrandLogos.tsx        # Scrollable brand partner ticker
│   ├── FeatureCards.tsx      # Core value proposition section
│   ├── FeatureGrid.tsx       # Side-by-side details checklist
│   ├── Footer.tsx            # Complete multi-column footer layout
│   ├── Header.tsx            # Sticky navigation bar with interactive mobile menu
│   ├── Hero.tsx              # Floating centerpiece showcase & sales pitch
│   ├── MensWatchesSection.tsx# Grid layout for Men's collection
│   ├── PrecisionSection.tsx  # Dynamic circular chart displaying engineering stats
│   ├── ProductCard.tsx       # Standard product item design card
│   ├── ProductGrid.tsx       # Grid component for top-selling watches
│   ├── ShopNowCTA.tsx        # Promotional banner & newsletter signup
│   ├── Testimonials.tsx      # User review gallery card
│   ├── VisualGallery.tsx     # Collage masonry highlight gallery
│   ├── WatchCollectionCard.tsx # Detailed collection watch card (hover-active)
│   └── WomensWatchesSection.tsx# Grid layout for Women's collection
├── lib/                      # Business logic, static data, and assets setup
│   ├── data.ts               # Localized text content (products, stats, links)
│   ├── images.ts             # Image absolute path maps and Unsplash CDN keys
│   └── watch-collections.ts  # Catalog data containing all watch styles
├── public/                   # Static files (icons, fonts, images)
│   └── photos/               # High-res localized watch photos for active use
├── scripts/                  # Automation & asset management scripts
│   ├── verify-assets.mjs     # Checks and syncs reference files to public/photos
│   └── extract-reference-assets.mjs # Crop mockup source images via sharp
├── package.json              # App dependencies & run scripts
├── tailwind.config.ts        # Tailwind configuration (colors, container grids, theme)
└── tsconfig.json             # TypeScript project compiler configurations
```

---

## 🚀 Getting Started

Follow these steps to run the project locally or build for production.

### Prerequisites

Make sure you have [Node.js (version 18.17.0 or higher)](https://nodejs.org/) installed on your computer.

### 1. Install Dependencies

Open your terminal in the root directory of the project and run:

```bash
npm install
```

### 2. Verify and Sync Assets

The template features a helper script to copy the watch photos to the correct public directory. Run this before starting the dev server:

```bash
npm run verify
```

### 3. Run Development Server

To launch the local development server:

```bash
npm run dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to view the template live.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

This compiles your application and produces a `.next/` output folder optimized for serverless deployments.

---

## 🎨 Customization Guide

Zonatime was built to be easily customizable without digging deep into the code. Below are the key steps to personalize the template:

### 1. Customizing Site Content (Text, Products, Links)
Almost all text contents are extracted to the files in the `/lib` folder.
- **Header Navigation, General Products, Testimonials, Brand Names, and Footer Links**: Open `lib/data.ts` (file:///c:/Users/lenovo/Desktop/watch%20store/lib/data.ts) and edit the exported arrays.
- **Men's & Women's Watch Catalog**: Open `lib/watch-collections.ts` (file:///c:/Users/lenovo/Desktop/watch%20store/lib/watch-collections.ts) to modify watch specifications, tags, prices, and image assignments.

### 2. Replacing Images and Photos
Images are mapped in `lib/images.ts` (file:///c:/Users/lenovo/Desktop/watch%20store/lib/images.ts).
1. Add your new image files to the `/photos` folder in the root, or directly to `public/photos`.
2. Open `lib/images.ts` and modify the `photoFiles` object to replace the filenames with your own filenames:
   ```typescript
   export const photoFiles = {
     men: {
       iwcHeritage: "your-new-image.jpg", // Replace with your image filename
       ...
     }
   }
   ```
3. Run `npm run verify` to sync the files to the deployment directory.

### 3. Customizing Colors & Styling
The template features custom global colors specifically chosen for luxury brands:
- **Background**: `#070707` (Deep Midnight Black)
- **Primary / Accent (Gold)**: `#D4AF37` (Classic Gold)
- **Secondary (Olive/Muted)**: `#556B2F` (Muted luxury olive glow)
- **Rose / Female Accent**: `#E5A1A8` (Warm luxury rose)

To modify these:
- Open `tailwind.config.ts` (file:///c:/Users/lenovo/Desktop/watch%20store/tailwind.config.ts) and modify the `colors` config mapping under `theme.extend`:
  ```typescript
  colors: {
    background: "#070707",
    gold: "#D4AF37",
    olive: "#556B2F",
    // Add your colors here
  }
  ```
- Custom utility classes, hover behaviors, and button presets are defined in `app/globals.css` (file:///c:/Users/lenovo/Desktop/watch%20store/app/globals.css).

### 4. Customizing Font
The font is loaded dynamically via `next/font/google` to guarantee maximum performance and eliminate layout shift.
To change the font:
1. Open `app/layout.tsx` (file:///c:/Users/lenovo/Desktop/watch%20store/app/layout.tsx).
2. Import your desired font from `next/font/google` (e.g., `Inter`, `Outfit`, `Montserrat`).
3. Replace `Plus_Jakarta_Sans` with your choice, adjust weight values, and update the font class name.

### 5. SEO & Metadata Configuration
To update the page title, description, and search engine parameters:
- Open `app/layout.tsx` (file:///c:/Users/lenovo/Desktop/watch%20store/app/layout.tsx) and edit the exported `metadata` object:
  ```typescript
  export const metadata: Metadata = {
    title: "Your Shop Name — Premium Luxury Watches",
    description: "Your shop description here...",
    // OpenGraph attributes for social sharing
  };
  ```

---

## 🚢 Deployment Guide

This Next.js template is ready to deploy with one-click settings.

### Deploying to Vercel (Recommended)
Next.js is created by Vercel, making it the most seamless hosting platform:
1. Push your customized project code to GitHub, GitLab, or Bitbucket.
2. Sign in to your [Vercel Account](https://vercel.com).
3. Click "Add New Project" and import your repository.
4. Vercel automatically detects Next.js configurations. Click **Deploy**.
5. Once complete, your site will be live with full global CDN caching and SSL.

### Deploying to Netlify / Other Providers
1. Connect your repository to Netlify.
2. Set the Build Command to `npm run build` and the Publish Directory to `.next`.
3. Deploy!

---

## 🎨 Asset & Font Credits

- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Licensed under the SIL Open Font License).
- **Icons**: Custom optimized inline vector designs, and [Lucide React](https://lucide.dev/) (MIT License).
- **Images**: High-resolution photography sourced from [Unsplash](https://unsplash.com/) (Free to use under the Unsplash License).

---

## 📧 Support and License

This product is sold under the standard **TemplateMonster License**.
For configuration help, custom feature integrations, or bugs, feel free to contact us through the TemplateMonster seller profile dashboard. We offer dedicated customer support to ensure your site is up and running exactly the way you want.

*Crafted with precision for watch collectors and luxury lovers.*
