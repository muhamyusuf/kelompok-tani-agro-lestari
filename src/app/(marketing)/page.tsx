import Head from "next/head";
import { siteConfig } from "@/config/site.config";
import HeaderHero from "@/components/marketing/heder";
import StatsCard from "@/components/marketing/stats-card";
import FeatureSection from "@/components/marketing/features";
import AboutSection from "@/components/marketing/about-section";
import ProductHighlight from "@/components/marketing/product-highlight";
import AgricultureActivitiesSection from "@/components/marketing/agriculture-activities-section";
import TechGridSection from "@/components/marketing/tech-grid-section";
import GallerySection from "@/components/marketing/gallery-section";
import TestimonialSection from "@/components/marketing/testimonial";
import BlogSection from "@/components/marketing/blog-section";
import OrderStepsSection from "@/components/marketing/order-step-section";
import CTASection from "@/components/marketing/cta";
import Location from "@/components/marketing/location";
import ContactSection from "@/components/marketing/contact-section";

export default function Home() {
  // Data JSON-LD untuk Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.origin,
    "logo": "https://www.agrolestarifarm.my.id/marketing/logo.png",
    "sameAs": [
      siteConfig.socials.whatsapp
    ],
    "description": siteConfig.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-813-6967-4457",
      "contactType": "Owner",
      "areaServed": "ID",
      "availableLanguage": "Bahasa Indonesia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lampung Timur",
      "addressCountry": "ID",
      "postalCode": "34375"
    }
  };

  const productSchemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Melon Premium Lampung Timur",
    "image": "https://www.agrolestarifarm.my.id/marketing/hero-image.png",
    "description": siteConfig.description,
    "brand": {
      "@type": "Brand",
      "name": "Agro Lestari"
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.origin}/marketing/intanon-melon.png`,
      "priceCurrency": "IDR",
      "price": "20000",
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Kelompok Tani Agro Lestari"
      }
    }
  };

  return (
    <>
      <Head>
        {/* Menambahkan Schema untuk Organisasi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Menambahkan Schema untuk Produk */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaData) }}
        />
      </Head>
      <main className="w-full flex flex-col min-h-screen max-w-7xl mx-auto">
        <HeaderHero />
        <StatsCard />
        <FeatureSection />
        <AboutSection />
        <ProductHighlight />
        <AgricultureActivitiesSection />
        <TechGridSection />
        <GallerySection />
        <TestimonialSection />
        <BlogSection />
        <OrderStepsSection />
        <CTASection />
        <Location />
        <ContactSection />
      </main>
    </>
  );
}
