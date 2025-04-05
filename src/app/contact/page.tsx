"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-20 bg-[#0d1f25]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="bg-[#091519] p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ceb693] rounded-full flex items-center justify-center mb-4">
                <Phone className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Number</h3>
              <p className="text-gray-400 mb-2">Office Telephone: +01234 567 891</p>
              <p className="text-gray-400">Mobile: +12345 678 910</p>
            </div>

            <div className="bg-[#091519] p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ceb693] rounded-full flex items-center justify-center mb-4">
                <Mail className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <p className="text-gray-400 mb-2">info@examplesite.com</p>
              <p className="text-gray-400">admin@examplesite.com</p>
            </div>

            <div className="bg-[#091519] p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#ceb693] rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p className="text-gray-400">245 D, South City, Mixed Tower</p>
              <p className="text-gray-400">Main town, New York, USA</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Send Us A Message
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                If you have any questions about our menu, reservation, or anything else, please feel free to contact us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#091519] p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-[#111e24] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="bg-[#111e24] border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  required
                  className="bg-[#111e24] border-gray-700 text-white"
                />
              </div>

              <div className="mb-8">
                <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="bg-[#111e24] border-gray-700 text-white min-h-[150px]"
                />
              </div>

              <Button type="submit" className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black w-full py-6 flex items-center justify-center gap-2">
                <Send size={18} />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] bg-[#091519] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-2">Map would be integrated here</p>
          <p className="text-lg font-medium">245 D, South City, Mixed Tower Main town, New York, USA</p>
        </div>
      </div>
    </>
  );
}
