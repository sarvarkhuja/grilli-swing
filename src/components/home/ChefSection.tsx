import Link from "next/link";
import Image from "next/image";
import { chefs } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function ChefSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.prod.website-files.com/63d0c13bf294b9ad2ad7a1f0/63d9ea2ab1946b363a74fa93_author-02.png"
          alt="Chef Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#091519]/95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
              OUR CHEF
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet our Chef
            </h2>
          </div>
          <Button asChild variant="outline" className="border-[#ceb693] text-[#ceb693] hover:bg-[#ceb693] hover:text-black">
            <Link href="/chef">View all</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {chefs.map((chef) => (
            <Link key={chef.id} href={`/chefs/${chef.slug}`} className="group">
              <div className="bg-[#0d1f25] p-4 rounded-md text-center transition-transform transform group-hover:-translate-y-2">
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091519] to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-[#ceb693] transition-colors">
                  {chef.name}
                </h3>
                <p className="text-gray-400">{chef.position}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
