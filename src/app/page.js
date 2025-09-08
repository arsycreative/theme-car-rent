import HeroSection from "@/components/home/HeroSection";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

export const metadata = {
  title: "CarRental Pro - Sewa Mobil Terpercaya dengan Driver Profesional",
  description:
    "Layanan rental mobil berkualitas dengan armada lengkap dan driver berpengalaman. Harga transparan, asuransi menyeluruh, dan support 24/7 untuk perjalanan aman dan nyaman.",
  keywords:
    "rental mobil, sewa mobil, rental mobil jakarta, sewa mobil dengan driver, rental mobil murah, mobil keluarga, rental harian, rental bulanan",
  openGraph: {
    title: "CarRental Pro - Sewa Mobil Terpercaya Indonesia",
    description:
      "Armada mobil berkualitas dengan pelayanan profesional 24/7. Harga transparan tanpa biaya tersembunyi.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "CarRental Pro",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <HowItWorksSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
