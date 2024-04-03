import { Metadata } from "next";
import HeroSection from "./section/HeroSection";
import ServiceSection from "./section/ServiceSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Halaman utama pada selhono website",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
    </>
  );
}
