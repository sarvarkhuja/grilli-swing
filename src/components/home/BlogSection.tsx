import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function BlogSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3756011995.jpeg"
          alt="Blog Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#091519]/95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
            OUR BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Blog Post
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-[#0d1f25] border-none overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 text-sm text-gray-400">
                  <span>Date: {post.date}</span>
                  <span className="mx-2">/</span>
                  <span>By: <Link href={`/blog-author/${post.author.toLowerCase()}`} className="text-[#ceb693] hover:underline">{post.author}</Link></span>
                </div>
                <h3 className="text-xl font-bold mb-4 hover:text-[#ceb693] transition-colors">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center text-[#ceb693] hover:text-[#d6c4a7] transition-colors"
                  >
                    <span className="mr-2">Read more</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
