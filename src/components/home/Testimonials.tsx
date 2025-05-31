"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n-context";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3756011995.jpeg"
          alt="Testimonials Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#091519]/95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("testimonials.heading")}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(currentSlide, currentSlide + 2 > testimonials.length ?
              testimonials.length : currentSlide + 2).map((testimonial, index) => (
                <div key={testimonial.id} className="bg-[#091519]/80 p-6 rounded-lg relative">
                  <div className="mb-6">
                    <p className="text-gray-300">
                      {testimonial.comment}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-[#ceb693] text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 text-4xl text-gray-500 opacity-30 font-serif">
                    " "
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-[#ceb693] hover:bg-[#ceb693] hover:text-black hover:border-[#ceb693]"
              onClick={goToPrevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mt-4 w-2 h-2 rounded-full mx-1 ${index === currentSlide ? "bg-[#ceb693]" : "bg-gray-600"
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-[#ceb693] hover:bg-[#ceb693] hover:text-black hover:border-[#ceb693]"
              onClick={goToNextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
