"use client";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductGrid from "@/components/home/ProductGrid";
import MidBanner from "@/components/home/MidBanner";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductGrid />
      <MidBanner />
      <Testimonials />
      <Newsletter />
    </>
  );
}