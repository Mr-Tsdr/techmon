import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
              <div className="mx-auto max-w-xl text-center lg:mx-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 text-5xl font-bold tracking-tight transition-transform duration-700 hover:scale-105 md:text-6xl lg:mt-0 xl:text-7xl cursor-pointer bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent hover:brightness-125">
                  TECH MON LLC
                </h1>

                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                  We will create high-quality websites and mobile applications
                  that meet your needs.
                  AI-based or hybrid software development company
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-6 text-base">
                    <Link href="/">
                      <span className="whitespace-nowrap">Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-6 text-base"
                  >
                    <Link href="/">
                      <span className="whitespace-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0 lg:ml-auto lg:w-1/2">
                <Image
                  src="/images/bg.png"
                  alt="Abstract Object"
                  width={500}
                  height={500}
                  className="mx-auto w-full max-w-sm lg:max-w-md lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 md:pb-32 dark:bg-gray-950">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6 mb-4 md:mb-0">
                <p className="text-end text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                  Our Partners
                </p>
              </div>

              <div className="relative py-2 md:w-[calc(100%-11rem)] ">
  <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
    {[
      { src: "/images/banks/khan.png", alt: "Khan Bank", w: 120, h: 40 },
      { src: "/images/banks/golomt.png", alt: "Golomt Bank", w: 120, h: 40 },
      { src: "/images/banks/mbank.png", alt: "M Bank", w: 120, h: 40 },
      { src: "/images/banks/tdb.png", alt: "TDB Bank", w: 120, h: 40 },
      { src: "/images/banks/xac.png", alt: "Xac Bank", w: 120, h: 40 },
      { src: "/images/banks/oyu.jpg", alt: "OyuTolgoi", w: 120, h: 40 },
      { src: "/images/banks/cu.png", alt: "CU", w: 120, h: 40 },
      { src: "/images/banks/apu.png", alt: "APU", w: 120, h: 40 },
    ].map((logo, index) => (
      <div key={index} className="flex px-2">
        <Image
          className="h-auto max-h-12 w-auto dark:invert transition-opacity duration-500 hover:opacity-80"
          src={logo.src}
          alt={`${logo.alt} Logo`}
          width={logo.w}
          height={logo.h}
        />
      </div>
    ))}
  </InfiniteSlider>

  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

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
