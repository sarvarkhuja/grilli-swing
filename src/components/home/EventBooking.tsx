"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n-context";

export function EventBooking() {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://assets.website-files.com/63d0c13bf294b9ad2ad7a1f0/63db47b039a0ee29b568b9c7_call-to-action-bg.jpg"
          alt="Event Booking Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091519]/95 via-[#091519]/90 to-[#091519]/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
              {t("events.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("events.heading")}
            </h2>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">{t("events.callReservation")}</p>
              <a href="tel:+358402587139" className="text-[#ceb693] text-xl font-semibold">
                +358 40 2587139
              </a>
            </div>

            <div className="bg-[#091519]/80 p-6 rounded-md mb-8">
              <h3 className="text-xl font-bold mb-4">{t("events.openingHours")}</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-gray-300">
                  <span>{t("events.mondayFriday")}</span>
                  <span>10.30 am - 10.00 pm</span>
                </li>
                <li className="flex items-center justify-between text-gray-300">
                  <span>{t("events.saturday")}</span>
                  <span>11.00 am - 10.00 pm</span>
                </li>
                <li className="flex items-center justify-between text-gray-300">
                  <span>{t("events.sunday")}</span>
                  <span>11.00 am - 10.00 pm</span>
                </li>
              </ul>
            </div>

            {/* <Button asChild className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black px-8 py-6 text-lg rounded-md">
              <Link href="/book-a-table">{t("events.bookEarly")}</Link>
            </Button> */}
          </div>

          <div className="hidden md:block">
            {/* This is left empty intentionally to match the original design */}
            <div className="relative w-full aspect-square">
              <Image
                src="/Food-1.png"
                alt="Feature Section"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
