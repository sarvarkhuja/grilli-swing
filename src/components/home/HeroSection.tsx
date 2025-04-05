import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://assets.website-files.com/63d0c13bf294b9ad2ad7a1f0/63fc8f0178a8c87d0456c240_hero-image-1-2.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="bg-[#ceb693] text-black text-sm px-4 py-1 rounded-full">
                GET 35% DISCOUNT
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Delicious & Mouth Watering Test
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Best food made by our Passionate Chefs
            </p>
            <Button asChild className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black px-8 py-6 text-lg rounded-md">
              <Link href="/book-a-table">Book a Table</Link>
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
}
