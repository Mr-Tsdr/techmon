"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
          <div className="pb-20 pt-10 md:pt-20 md:pb-32 lg:pb-56">
            <div className="relative flex w-full flex-col lg:flex-row lg:items-center">
              {/* HERO IMAGE */}
              <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
                <Image
                  src="/images/newbg.jpg"
                  alt="Abstract Object"
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
                  priority
                />

                {/* OVERLAY CTA */}
                <div className="absolute inset-0 flex items-center justify-start px-6 mt-48 ml-18">
                  <div className="text-left">
                    <Link href="/demo">
                      <Button
                        size="lg"
                        className="cursor-pointer px-8 py-4 text-base sm:text-lg border border-orange-500 bg-transparent text-white hover:bg-orange-500 transition"
                      >
                        <span className="flex items-center gap-2">
                          Let’s Talk
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS SLIDER */}
        <section className="bg-background dark:bg-gray-950 pb-16 md:pb-32">
          <div className="group relative max-w-6xl px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:max-w-44 md:border-r md:pr-6 mb-4 md:mb-0 w-full md:w-auto text-center md:text-end">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                  Our Partners
                </p>
              </div>

              <div className="relative w-full md:w-[calc(100%-11rem)] py-2">
                <InfiniteSlider speedOnHover={20} speed={40} gap={96}>
                  {[
                    { src: "/images/banks/khan.png", alt: "Khan Bank" },
                    { src: "/images/banks/golomt.png", alt: "Golomt Bank" },
                    { src: "/images/banks/mbank.png", alt: "M Bank" },
                    { src: "/images/banks/tdb.png", alt: "TDB Bank" },
                    { src: "/images/banks/xac.png", alt: "Xac Bank" },
                    { src: "/images/banks/oyu.jpg", alt: "OyuTolgoi" },
                    { src: "/images/banks/cu.png", alt: "CU" },
                    { src: "/images/banks/apu.png", alt: "APU" },
                  ].map((logo, index) => (
                    <div key={index} className="flex px-4">
                      <Image
                        className="h-auto max-h-12 w-auto dark:invert transition-opacity duration-500 hover:opacity-80"
                        src={logo.src}
                        alt={`${logo.alt} Logo`}
                        width={120}
                        height={40}
                      />
                    </div>
                  ))}
                </InfiniteSlider>

                {/* GRADIENT FADES */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                {/* OPTIONAL BLUR EFFECTS */}
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20 dark:bg-gray-950"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20 dark:bg-gray-950"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
