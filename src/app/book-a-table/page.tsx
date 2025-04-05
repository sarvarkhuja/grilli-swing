"use client";

import { useState } from "react";
import { Calendar, Clock, Users, Send } from "lucide-react";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Reservation submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  return (
    <>
      <PageBanner
        title="Book A Table"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Pages", href: "#" },
          { name: "Book A Table", href: "/book-a-table" },
        ]}
      />

      <section className="py-20 bg-[#0d1f25]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
              RESERVATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Book Your Table
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Reserve your table and enjoy our delicious food. We offer a unique dining experience with our passionate chefs.
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="bg-[#111e24] border-gray-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-white mb-2 block">Date</Label>
                <div className="relative">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-[#111e24] border-gray-700 text-white"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="time" className="text-white mb-2 block">Time</Label>
                <div className="relative">
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleSelectChange("time", value)}
                  >
                    <SelectTrigger className="bg-[#111e24] border-gray-700 text-white">
                      <SelectValue placeholder="Select Time" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111e24] border-gray-700 text-white">
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                      <SelectItem value="22:00">10:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <Label htmlFor="guests" className="text-white mb-2 block">Number of Guests</Label>
                <div className="relative">
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleSelectChange("guests", value)}
                  >
                    <SelectTrigger className="bg-[#111e24] border-gray-700 text-white">
                      <SelectValue placeholder="Select Guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111e24] border-gray-700 text-white">
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3">3 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="5">5 People</SelectItem>
                      <SelectItem value="6">6 People</SelectItem>
                      <SelectItem value="7">7 People</SelectItem>
                      <SelectItem value="8">8 People</SelectItem>
                      <SelectItem value="party">8+ (Party)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Users className="absolute right-3 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <Label htmlFor="message" className="text-white mb-2 block">Special Request</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests or preferences?"
                className="bg-[#111e24] border-gray-700 text-white min-h-[120px]"
              />
            </div>

            <Button type="submit" className="bg-[#ceb693] hover:bg-[#d6c4a7] text-black w-full py-6 flex items-center justify-center gap-2">
              <Send size={18} />
              <span>Book A Table</span>
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">Call for quick reservation</p>
            <a href="tel:+01234567891" className="text-[#ceb693] text-2xl font-semibold">
              +01234 567 891
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
