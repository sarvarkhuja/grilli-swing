"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuItems, MenuItemProps } from "@/lib/data";
import { useTranslation } from "@/lib/i18n-context";

interface MenuCategoryProps {
  items: MenuItemProps[];
}

const MenuCategory = ({ items }: MenuCategoryProps) => {
  const { t } = useTranslation();

  const getTagTranslation = (tag: string) => {
    switch (tag) {
      case 'recommended':
        return t("menu.tags.recommended");
      case 'chef choice':
        return t("menu.tags.chefChoice");
      case 'seasonal':
        return t("menu.tags.seasonal");
      default:
        return tag;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.slice(0, 5).map((item) => (
        <div key={item.id} className="flex justify-between border-b border-gray-700 pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-lg">{item.name}</h3>
              {item.tags && (
                <span className={`text-xs uppercase px-2 py-0.5 rounded-sm ${item.tags === 'recommended' ? 'bg-[#ceb693] text-black' :
                  item.tags === 'chef choice' ? 'bg-[#9e3f1a] text-white' :
                    item.tags === 'seasonal' ? 'bg-[#649a66] text-white' :
                      'bg-[#4c5f6e] text-white'
                  }`}>
                  {getTagTranslation(item.tags)}
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
          <div className="text-[#ceb693] font-medium">{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export function SpecialMenu() {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/2803412184.jpeg')",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
            {t("menu.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("menu.heading")}
          </h2>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="flex justify-center bg-transparent border-b border-gray-700 mb-8 w-full h-auto">
            <TabsTrigger
              value="breakfast"
              className="px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-[#ceb693] data-[state=active]:border-b-2 data-[state=active]:border-[#ceb693] rounded-none text-white"
            >
              {t("menu.breakfast")}
            </TabsTrigger>
            <TabsTrigger
              value="brunch"
              className="px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-[#ceb693] data-[state=active]:border-b-2 data-[state=active]:border-[#ceb693] rounded-none text-white"
            >
              {t("menu.brunch")}
            </TabsTrigger>
            <TabsTrigger
              value="lunch"
              className="px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-[#ceb693] data-[state=active]:border-b-2 data-[state=active]:border-[#ceb693] rounded-none text-white"
            >
              {t("menu.lunch")}
            </TabsTrigger>
            <TabsTrigger
              value="dinner"
              className="px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-[#ceb693] data-[state=active]:border-b-2 data-[state=active]:border-[#ceb693] rounded-none text-white"
            >
              {t("menu.dinner")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="breakfast">
            <MenuCategory items={menuItems.filter(item => item.category === 'breakfast')} />
          </TabsContent>

          <TabsContent value="brunch">
            <MenuCategory items={menuItems.filter(item => item.category === 'brunch')} />
          </TabsContent>

          <TabsContent value="lunch">
            <MenuCategory items={menuItems.filter(item => item.category === 'lunch')} />
          </TabsContent>

          <TabsContent value="dinner">
            <MenuCategory items={menuItems.filter(item => item.category === 'dinner')} />
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-10">
          <Link
            href="/menu"
            className="flex items-center space-x-2 text-[#ceb693] hover:text-[#d6c4a7] transition-colors"
          >
            <ArrowRight size={20} />
            <span>{t("menu.viewFullMenu")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
