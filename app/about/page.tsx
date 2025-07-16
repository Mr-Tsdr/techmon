"use client";

import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero8-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />

      <section className="relative w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
              About <span className="text-blue-600 dark:text-blue-400">TechMon</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              TechMon is a technology service startup providing
              comprehensive digital solutions for Mongolian businesses
              worldwide. From modern websites and mobile apps to engaging
              marketing content, we empower business owners to grow and
              succeed in today’s digital landscape.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {[
                "Full-service digital agency",
                "Specialized in web & mobile development",
                "Helping Mongolian businesses abroad",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-800 dark:text-gray-200">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="transition transform hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 duration-300"
            >
              <Link href="/">
                Go Back Home
              </Link>
            </Button>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-64 lg:h-[500px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/bg3.jpg"
              alt="About TechMon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
        `}</style>
      </section>

      {/* Optional: Values or Services Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "Always exploring new technologies to deliver innovative solutions.",
              image: "/images/aboutpage/inno.jpg",
            },
            {
              title: "Quality",
              desc: "We ensure high-quality development and user-friendly design.",
              image: "/images/aboutpage/quality.jpg",
            },
            {
              title: "Partnership",
              desc: "We grow together with our clients, building lasting partnerships.",
              image: "/images/aboutpage/partner.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 text-center cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
                className="mx-auto mb-4 rounded-xl"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
