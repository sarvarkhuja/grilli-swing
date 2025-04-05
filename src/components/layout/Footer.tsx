"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#091519] text-white relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1940906381/615314002.jpeg')",
        }}
      />

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 md:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-[#ceb693] text-sm uppercase tracking-wide mb-2">NEWSLETTER</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe our Newsletter</h2>
              <p className="text-gray-400 mb-6">To get latest updates, offers and promotions</p>
            </div>
            <div className="w-full md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Email Here"
                  className="bg-[#111e24] border-gray-700 text-white"
                />
                <Button className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black">
                  Subscribe
                </Button>
              </form>
              <div className="mt-4">
                <p className="text-gray-400">Call for Reservation <a href="tel:+01234567891" className="text-[#ceb693]">+01234 567 891</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://ext.same-assets.com/1940906381/455124028.svg"
                alt="Rosoi Restaurant"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Rosoi is one of the most popular Restaurant & special menu made by our passionate chefs
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#111e24] flex items-center justify-center hover:bg-[#ceb693] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#111e24] flex items-center justify-center hover:bg-[#ceb693] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#111e24] flex items-center justify-center hover:bg-[#ceb693] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#111e24] flex items-center justify-center hover:bg-[#ceb693] transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Restaurant Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Restaurant</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-[#ceb693] transition-colors">About us</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-[#ceb693] transition-colors">Our Menu</Link></li>
              <li><Link href="/book-a-table" className="text-gray-400 hover:text-[#ceb693] transition-colors">Book a Table</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#ceb693] transition-colors">Blog Post</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#ceb693] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Information</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-[#ceb693] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#ceb693] transition-colors">24/7 Service</Link></li>
              <li><Link href="/style-guide" className="text-gray-400 hover:text-[#ceb693] transition-colors">Style Guide</Link></li>
              <li><Link href="/licenses" className="text-gray-400 hover:text-[#ceb693] transition-colors">Licenses</Link></li>
              <li><Link href="/change-log" className="text-gray-400 hover:text-[#ceb693] transition-colors">Change Log</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact info</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>245 D, South City, Mixed Tower<br /> Main town, New York, USA</p>
              <p>
                <a href="mailto:info@examplesite.com" className="hover:text-[#ceb693] transition-colors">info@examplesite.com</a>
              </p>
              <p>
                <a href="mailto:admin@examplesite.com" className="hover:text-[#ceb693] transition-colors">admin@examplesite.com</a>
              </p>
              <p>
                <a href="tel:+12345678910" className="hover:text-[#ceb693] transition-colors">+12345 678 910</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-8 text-center text-gray-400 text-sm">
          <a href="https://webflow.com/templates/designers/brandbes" className="text-[#ceb693]">Brandbes.</a> All Rights Reserved - Privacy Policy
        </div>
      </div>
    </footer>
  );
}
