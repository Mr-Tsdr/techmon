"use client";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero8-header";
import Image from "next/image";

const products = Array(6).fill({
  title: "Tech Mon - Leading Innovation",
  description:
    "“Tech Mon” LLC is a nuclear instruments distributor in Mongolia providing radiation solutions and safety equipment for industrial and healthcare sectors since 2017.",
  image: "/images/about.jpg",
});

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />

      <main className="flex-grow px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.02] duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
