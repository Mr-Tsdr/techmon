"use client";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero8-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <HeroHeader />
      <section className="w-full bg-white dark:bg-gray-900 py-16 px-6 lg:px-12 lg:py-48" id="about">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative h-64 lg:h-[500px]">
            <Image
              src="/images/about.jpg"
              alt="About Company"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-gray-900 dark:text-white">
              ABOUT COMPANY
            </h2>
            <p className="text-gray-800 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              “Mass Tech” LLC is a nuclear instruments distributor in Mongolia that was established in 2017 and provides radiation sources, radiation measurement instruments, and equipment for the fields of mining, industry, radioactive minerals, medical diagnosis and treatment, road and lodging research, environmental monitoring and border customs sectors that use ionizing radiation sources and is a company engaged in the supply and sale of protective clothing for radiation safety from the world’s leading manufacturers with official authorization.
              <br /><br />
              Our company has professional and qualified personnel who have obtained bachelor’s and master’s degrees in nuclear technology, nuclear engineering, and electronics at home and abroad. In strengthening the material bas of the nuclear technology industry and localizing high technology in Mongolia, we work with public and private sector organizations to provide professional guidance and advice on the quality and safety of supplied goods, conduct training, and repair and maintain radiation measurement equipment and devices.
            </p>
            <Button asChild size="lg" className="transition transform hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 duration-300">
              <Link href="/">Go Back Home</Link>
            </Button>
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
          <FooterSection/>
    </div>
  );
}
