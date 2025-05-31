"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n-context";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";

const MobileNav = () => {
  const { t } = useTranslation();

  const navLinks = [
    {
      title: t('nav.home'),
      path: "/",
    },
    {
      title: t('nav.menu'),
      path: "/menu",
    },
    {
      title: t('nav.about'),
      path: "/about",
    },
    {
      title: t('nav.contact'),
      path: "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 text-white hover:bg-transparent"
          aria-label={t('aria.toggleMenu')}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t('aria.toggleMenu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#091519] text-white">
        <nav className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <div key={index} className="py-2">
              <Link href={link.path} className="text-xl font-medium">
                {link.title}
              </Link>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <LanguageSwitcher />
          </div>
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
  const { t } = useTranslation();

  const navLinks = [
    {
      title: t('nav.home'),
      path: "/",
    },
    {
      title: t('nav.menu'),
      path: "/menu",
    },
    {
      title: t('nav.about'),
      path: "/about",
    },
    {
      title: t('nav.contact'),
      path: "/contact",
    },
  ];

  return (
    <header className="relative z-50">
      <div className="bg-[#091519] text-white flex justify-between items-center px-4 md:px-8 py-3">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/grilliswing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ceb693]">
            {t('social.facebook')}
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ceb693]">
            {t('social.instagram')}
          </a>
        </div>
        <div className="hidden md:block">
          <p className="text-sm">{t('header.promo')}</p>
        </div>
        <div className="hidden md:block">
          <LanguageSwitcher />
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
