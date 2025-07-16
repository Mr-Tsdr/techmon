"use client";
import {
    CodeBracketIcon,
    ServerIcon,
    DevicePhoneMobileIcon,
    CheckBadgeIcon,
  } from "@heroicons/react/24/outline";
  import Link from "next/link";
  import { Button } from "@/components/ui/button"; // your original Button component
import { useEffect, useRef, useState } from "react";
  
  export default function TeamSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, []);
  
    const team = [
      {
        title: "Front-End Developer",
        description:
          "Crafts engaging user interfaces and ensures seamless user experience.",
        icon: CodeBracketIcon,
      },
      {
        title: "Back-End Developer",
        description:
          "Builds robust APIs, manages databases, and powers business logic.",
        icon: ServerIcon,
      },
      {
        title: "Mobile Developer",
        description:
          "Develops performant and intuitive mobile applications for Android and iOS.",
        icon: DevicePhoneMobileIcon,
      },
      {
        title: "QA Tester",
        description:
          "Ensures software quality with rigorous testing and bug tracking.",
        icon: CheckBadgeIcon,
      },
    ];
  
    return (
      <section className="py-16 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div ref={sectionRef} className="mx-auto max-w-5xl px-6">
          <div
            className={`text-center transition-opacity duration-1000 ${
              isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
              Our Team
            </span>
  
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 transition-transform duration-300 hover:scale-105 cursor-pointer">
              Meet Our Specialists
            </h2>
  
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Our team is dedicated to delivering top-quality software solutions across all platforms, from web to mobile, ensuring performance and reliability.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 cursor-pointer"
                >
                  <member.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                    {member.description}
                  </p>
                </div>
              ))}
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
  