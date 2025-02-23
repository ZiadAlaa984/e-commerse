"use client";
import Customers from "@/components/LandingPage/Customers";
import Download from "@/components/LandingPage/Download";
import Hero from "@/components/LandingPage/Hero";
import Offer from "@/components/LandingPage/Offer";
import Service from "@/components/LandingPage/Service";
import SliderProducts from "@/components/LandingPage/SliderProducts";
import SliderSuppliers from "@/components/LandingPage/SliderSuppliers";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <SliderProducts />
      <Download />
      <Offer />
      <SliderSuppliers />
      <Customers />
    </>
  );
}
