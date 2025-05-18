import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageBanner } from "@/components/shared/PageBanner";
import { Features } from "@/components/home/Features";
import { EventBooking } from "@/components/home/EventBooking";
import { Testimonials } from "@/components/home/Testimonials";
import { ChefSection } from "@/components/home/ChefSection";

export const metadata = {
  title: "About Us - Grilli Swing Restaurant",
  description: "Learn about our restaurant, our mission, and our passionate team of chefs",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Pages", href: "#" },
          { name: "About Us", href: "/about" },
        ]}
      />

      <section className="py-20 relative">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1940906381/3756011995.jpeg"
            alt="About Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091519] via-[#091519]/90 to-[#091519]/70"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
                  20 YEARS OF EXPERIENCE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Multi Cuisine with the<br />Traditional Cuisine
                </h2>
              </div>
              <p className="text-gray-300 mb-8 max-w-lg">
                Rosoi is one of the most popular Restaurants with unique
                & special menu made by our passionate chefs with love and quality with can impress you
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="mb-4 sm:mb-0">
                  <p className="text-gray-300 mb-2">Call for Reservation</p>
                  <a href="tel:+01234567891" className="text-[#ceb693] text-lg font-medium">
                    +01234 567 891
                  </a>
                </div>
                <Button asChild className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black px-6">
                  <Link href="/menu">View full Menu</Link>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative mx-auto w-full max-w-md">
                <Image
                  src="https://ext.same-assets.com/1940906381/2803412184.jpeg"
                  alt="Chef Image"
                  width={500}
                  height={500}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <ChefSection />
      <EventBooking />
      <Testimonials />
    </>
  );
}
