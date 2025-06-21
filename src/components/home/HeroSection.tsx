"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { useTranslation } from "@/lib/i18n-context";

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Set rootElement only on client side after component mounts
    setRootElement(document.getElementById("root") || document.body);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/2803412184.jpeg"
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
                {t("hero.discount")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("hero.heading")}
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              {t("hero.description")}
            </p>
            <Button
              className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black px-8 py-6 text-lg rounded-md"
              onClick={() => setIsOpen(true)}
            >
              {t("hero.bookTable")}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/main_dish.png"
            alt="Hero Image"
            width={200}
            height={200}
            priority
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/khnodira14/grilli-swing"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
          pageSettings={{
            backgroundColor: "091519",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "ceb693",
            textColor: "ffffff"
          }}
        />
      )}
    </section>
  );
}
