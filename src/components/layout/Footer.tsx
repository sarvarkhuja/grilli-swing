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

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Grilli Swing Restaurant"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Grilli Swing is one of the most popular Restaurant & special menu made by our passionate chefs
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/grilliswing/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#111e24] flex items-center justify-center hover:bg-[#ceb693] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#111e24] flex items-center justify-center hover:bg-[#ceb693] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Restaurant Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Restaurant</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-[#ceb693] transition-colors">About</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-[#ceb693] transition-colors">Menu</Link></li>
              <li><Link href="/book-a-table" className="text-gray-400 hover:text-[#ceb693] transition-colors">Chef</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-[#ceb693] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#ceb693] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Information</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-[#ceb693] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact info</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Valtatie 21<br /> Oulu, Finland, 90570</p>
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
          <a href="https://webflow.com/templates/designers/brandbes" className="text-[#ceb693]">Grilli Swing.</a> All Rights Reserved - Privacy Policy
        </div>
      </div>
    </footer>
  );
}
