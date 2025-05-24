import { HeroSection } from "@/components/home/HeroSection";
import { CuisineSection } from "@/components/home/CuisineSection";
import { SpecialMenu } from "@/components/home/SpecialMenu";
import { EventBooking } from "@/components/home/EventBooking";
import { Testimonials } from "@/components/home/Testimonials";
import { ChefSection } from "@/components/home/ChefSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CuisineSection />
      <SpecialMenu />
      <EventBooking />
      <Testimonials />
    </>
  );
}
