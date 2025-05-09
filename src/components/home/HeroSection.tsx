"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://ext.same-assets.com/1940906381/2803412184.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="max-w-xl mx-auto md:mx-0">
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
            <Button
              className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black px-8 py-6 text-lg rounded-md"
              onClick={() => setIsOpen(true)}
            >
              Book a Table
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/Food-2.png"
            alt="Hero Image"
            width={200}
            height={200}
            priority
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>

      <PopupModal
        url="https://calendly.com/sarvarmuradwork/reserve-a-table"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root") || document.body}
        pageSettings={{
          backgroundColor: "091519",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "ceb693",
          textColor: "ffffff"
        }}
      />
    </section>
  );
}
