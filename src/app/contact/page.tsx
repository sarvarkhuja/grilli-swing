"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/lib/i18n-context";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert(t("contact.messageSent"));
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      /> */}

      <section className="py-20 bg-[#0d1f25]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="bg-[#091519] p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ceb693] rounded-full flex items-center justify-center mb-4">
                <Phone className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("contact.phoneNumber")}</h3>
              <p className="text-gray-400 mb-2">+358 40 258 7139</p>
            </div>

            <div className="bg-[#091519] p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ceb693] rounded-full flex items-center justify-center mb-4">
                <Mail className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("contact.email")}</h3>
              <p className="text-gray-400 mb-2">info@examplesite.com</p>
            </div>

            <div className="bg-[#091519] p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ceb693] rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("contact.address")}</h3>
              <p className="text-gray-400">Valtatie 21, Oulu, Finland</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
                {t("contact.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("contact.heading")}
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                {t("contact.description")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#091519] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">{t("contact.fullName")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.placeholderName")}
                    required
                    className="bg-[#111e24] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">{t("contact.emailAddress")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.placeholderEmail")}
                    required
                    className="bg-[#111e24] border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="subject" className="text-white mb-2 block">{t("contact.subject")}</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact.placeholderSubject")}
                  required
                  className="bg-[#111e24] border-gray-700 text-white"
                />
              </div>

              <div className="mb-8">
                <Label htmlFor="message" className="text-white mb-2 block">{t("contact.message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.placeholderMessage")}
                  required
                  className="bg-[#111e24] border-gray-700 text-white min-h-[150px]"
                />
              </div>

              <Button type="submit" className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black w-full py-6 flex items-center justify-center gap-2">
                <Send size={18} />
                <span>{t("contact.sendMessage")}</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] bg-[#091519] flex items-center justify-center">
        <div className="text-center">
          {/* <p className="text-gray-400 mb-2">Map would be integrated here</p>
          <p className="text-lg font-medium">245 D, South City, Mixed Tower Main town, New York, USA</p> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4241.773773968285!2d25.45876877767606!3d65.02761254261553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46802d5e3fd6c0b5%3A0x3259a9cfbdaba1e7!2sGrill%20Swing!5e1!3m2!1sen!2sfi!4v1748524231318!5m2!1sen!2sfi" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
}
