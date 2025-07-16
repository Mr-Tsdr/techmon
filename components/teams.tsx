"use client";
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
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
      title: "CEO",
      description: "CEO of the company",
      icon: CodeBracketIcon,
      image: "/images/team/ceo.jpg",
    },
    {
      title: "Front-End Developer",
      description:
        "Crafts engaging user interfaces and ensures seamless user experience.",
      icon: CodeBracketIcon,
      image: "/images/team/frontend.jpg",
    },
    {
      title: "Back-End Developer",
      description:
        "Builds robust APIs, manages databases, and powers business logic.",
      icon: ServerIcon,
      image: "/images/team/back.jpg",
    },
    {
      title: "Mobile Developer",
      description:
        "Develops performant and intuitive mobile applications for Android and iOS.",
      icon: DevicePhoneMobileIcon,
      image: "/images/team/mobile.jpg",
    },
    {
      title: "QA Tester",
      description:
        "Ensures software quality with rigorous testing and bug tracking.",
      icon: CheckBadgeIcon,
      image: "/images/team/qa.jpg",
    },
    {
      title: "UI/UX Designer",
      description:
        "Ensures software quality with rigorous testing and bug tracking.",
      icon: CodeBracketIcon,
      image: "/images/team/ui.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white mb-6 shadow">
            Our Team
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 dark:from-blue-300 dark:via-purple-400 dark:to-emerald-300 transition-transform duration-300 hover:scale-105 cursor-pointer">
            Meet Our Specialists
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Our team is dedicated to delivering top-quality software solutions
            across all platforms, ensuring excellent performance and innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center bg-gradient-to-br from-white via-sky-50 to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                {/* Profile image */}
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md dark:border-gray-700"
                />

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.description}
                </p>

                {/* Mini Icon */}
                <div className="absolute bottom-4 right-4">
                  <member.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 opacity-80" />
                </div>
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
