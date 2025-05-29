"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    title: "Home",
    path: "/",
    /*submenu: [
      { title: "Home One", path: "/" },
      { title: "Home Two", path: "/home-2" },
      { title: "Home Three", path: "/home-ecommerce" },
    ],*/
  },
  {
    title: "Menu",
    path: "/menu",
    /*submenu: [
      { title: "Menu One", path: "/menu" },
      { title: "Menu Two", path: "/menu-2" },
      { title: "eCommerce Menu", path: "/ecommerce-menu" },
      { title: "eCommerce Menu Two", path: "/ecommerce-menu-2" },
    ],*/
  },
  {
    title: "About",
    path: "/about",
    // submenu: [
      // { title: "About", path: "/about" },
      /*{ title: "About Two", path: "/about-2" },*/
      // { title: "Chef", path: "/chef" },
      /*{ title: "Book A Table", path: "/book-a-table" },*/
      // { title: "Gallery", path: "/gallery" },
      /*{ title: "Changelog", path: "/change-log" },*/
      /*{ title: "Licenses", path: "/licenses" },*/
      /*{ title: "Style Guide", path: "/style-guide" },*/
    // ],
  },
  /*{
    title: "Blog",
    path: "/blog",
    submenu: [{ title: "Blog Default", path: "/blog" }],
  },*/
  {
    title: "Contact",
    path: "/contact",
    /*submenu: [
      { title: "Contact One", path: "/contact" },
      { title: "Contact Two", path: "/contact-2" },
    ],*/
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 text-white hover:bg-transparent"
          aria-label="Toggle Menu"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#091519] text-white">
        <nav className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <div key={index} className="py-2">
              <Link href={link.path} className="text-xl font-medium">
                {link.title}
              </Link>
              {/* {link.submenu && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {link.submenu.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sublink.path}
                      className="text-gray-300 hover:text-white"
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const NavItem = ({
  title,
  path,
  submenu,
}: {
  title: string;
  path: string;
  submenu?: { title: string; path: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={path}
        className="px-3 py-2 text-white hover:text-[#ceb693] transition-colors"
      >
        {title}
      </Link>
      {submenu && isOpen && (
        <div className="absolute left-0 z-10 mt-1 w-48 rounded-md bg-[#091519] py-2 shadow-lg">
          {submenu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-4 py-2 text-sm text-white hover:bg-[#111e24] hover:text-[#ceb693]"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export function Header() {
  return (
    <header className="relative z-50">
      <div className="bg-[#091519] text-white flex justify-between items-center px-4 md:px-8 py-3">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/grilliswing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ceb693]">
            Facebook
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ceb693]">
            Instagram
          </a>
        </div>
        <div>
          <p className="text-sm">Book a table online and get 10% off your bill</p>
        </div>
      </div>
      <nav className="bg-[#091519] border-t border-gray-800 px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Grilli Swing"
            width={120}
            height={40}
            className="h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <NavItem
              key={index}
              title={link.title}
              path={link.path}
              // submenu={link.submenu}
            />
          ))}
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
