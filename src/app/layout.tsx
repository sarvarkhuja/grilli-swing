import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/lib/i18n-context";
import { getServerI18n } from "@/lib/i18n-server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grilli Swing - Burger Restaurant",
  description: "A delightful culinary experience with unique & special menu made by our passionate chefs",
};

export default async function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  // Server-side i18n setup
  const { language, translations } = await getServerI18n(searchParams);

  return (
    <html lang={language} className="scroll-smooth">
      <body className={`${inter.className} bg-[#091519] text-white min-h-screen flex flex-col`}>
        <I18nProvider initialLanguage={language} initialTranslations={translations}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
