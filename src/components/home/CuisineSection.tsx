import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CuisineSection() {
  return (
    <section className="py-20 relative">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.prod.website-files.com/63d0c13bf294b9ad2ad7a1f0/63d9de67f1e5b982041702d6_about-image-01.png"
          alt="Cuisine Background"
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
                FRESH & TASTY FOOD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                A Sophisticated and<br />Traditional Cuisine
              </h2>
            </div>
            <p className="text-gray-300 mb-8 max-w-lg">
              Rosoi is one of the most popular Restaurants with unique
              & special menu made by our passionate chefs with love and quality with can impress you
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-300 mb-2">Call for Reservation</p>
                <a href="tel:+358402587139" className="text-[#ceb693] text-lg font-medium">
                  +358 40 2587139
                </a>
              </div>
              <Button asChild className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black px-6">
                <Link href="/menu">View full Menu</Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative mx-auto w-full">
              <Link href="/ecommerce-menu">
                <Image
                  src="/Interior.png"
                  alt="Traditional Cuisine"
                  width={800}
                  height={800}
                  className="object-fit w-full rounded-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
