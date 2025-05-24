import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureProps) => (
  <div className="bg-[#091519]/70 p-6 rounded-md">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export function Features() {
  const featureDescription = "Grilli Swing is one of the most popular Restaurant & special menu made by our passionate chefs and quality with can impress you";

  const features = [
    {
      title: "Passionate Chef",
      description: featureDescription,
    },
    {
      title: "100% Fresh Food",
      description: featureDescription,
    },
    {
      title: "Memorable Ambience",
      description: featureDescription,
    },
    {
      title: "Special Dish for Occasion's",
      description: featureDescription,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-gradient-to-r from-[#091519] via-[#091519]/90 to-[#091519]/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/Exterior.png"
                alt="Feature Section"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 mb-12 text-center md:text-left">
            <span className="inline-block text-[#ceb693] text-sm uppercase tracking-wide mb-2">
              QUALITY & BALANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              An Extraordinary<br />Experience for all
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
