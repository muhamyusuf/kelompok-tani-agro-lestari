import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookText, Github } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import HeaderHero from "@/components/marketing/heder";
import FeatureSection from "@/components/marketing/features";
import AboutSection from "@/components/marketing/about-section";
import ProductHighlight from "@/components/marketing/product-highlight";
import GallerySection from "@/components/marketing/gallery-section";
import TestimonialSection from "@/components/marketing/testimonial";
import BlogSection from "@/components/marketing/blog-section";
import ContactSection from "@/components/marketing/contact-section";
import CTASection from "@/components/marketing/cta";
import OrderStepsSection from "@/components/marketing/order-step-section";
import TechGridSection from "@/components/marketing/tech-grid-section";
import AgricultureActivitiesSection from "@/components/marketing/agriculture-activities-section";
import Location from "@/components/marketing/location";
import StatsCard from "@/components/marketing/stats-card";

export default function Home() {
  return (
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
  )
}
