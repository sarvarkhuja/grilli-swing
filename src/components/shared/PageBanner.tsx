import Image from "next/image";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs?: {
    name: string;
    href: string;
  }[];
  backgroundImage?: string;
}

export function PageBanner({
  title,
  breadcrumbs = [],
  backgroundImage = "https://ext.same-assets.com/1940906381/32376973.jpeg"
}: PageBannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#091519]/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>

        {breadcrumbs.length > 0 && (
          <div className="flex justify-center items-center space-x-2">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-[#ceb693]">•</span>}
                <Link
                  href={breadcrumb.href}
                  className={index === breadcrumbs.length - 1
                    ? "text-[#ceb693]"
                    : "text-white hover:text-[#ceb693] transition-colors"
                  }
                >
                  {breadcrumb.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
