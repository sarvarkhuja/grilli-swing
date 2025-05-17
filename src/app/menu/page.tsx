import { PageBanner } from "@/components/shared/PageBanner";
import { SpecialMenu } from "@/components/home/SpecialMenu";
import { EventBooking } from "@/components/home/EventBooking";
import { Testimonials } from "@/components/home/Testimonials";

export const metadata = {
  title: "Our Menu - Grilli Swing Restaurant",
  description: "Explore our delicious menu offerings with items carefully prepared by our passionate chefs",
};

export default function MenuPage() {
  return (
    <>
      <PageBanner
        title="Our Menu"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Pages", href: "#" },
          { name: "Our Menu", href: "/menu" },
        ]}
      />
      <SpecialMenu />
      <EventBooking />
      <Testimonials />
    </>
  );
}
