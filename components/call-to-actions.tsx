"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToActions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only run once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div ref={sectionRef} className="mx-auto max-w-5xl px-6">
        <div
          className={`text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
            Our Commitment
          </span>

          <h2 className="text-balance text-4xl font-bold lg:text-5xl mb-4 transition-transform hover:-translate-y-1 duration-300 ease-in-out text-gray-900 dark:text-white cursor-pointer">
            OUR VISION
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
           Our company`s vision is to use technological advancements to deliver products and services that provide real value and intelligent solutions to our customers. We aim to continuously grow, contribute to our customers success, and be a leader in our industrys.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="transition transform hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 duration-300 ease-in-out"
            >
              <Link href="/">
                <span>Get Started</span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="transition transform hover:-translate-y-1 hover:ring-2 hover:ring-gray-400 duration-300 ease-in-out"
            >
              <Link href="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
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
          animation: fadeInUp 1.5s ease forwards;
        }
      `}</style>
    </section>
  );
}
