"use client";

import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero8-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Demo() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState("onlineStore");

  const tabs = [
    { id: "onlineStore", label: t.onlineStore },
    { id: "intlTransport", label: t.intlTransport },
    { id: "webIntro", label: t.webIntro },
    { id: "travelAgency", label: t.travelAgency },
    { id: "education", label: t.education },
    { id: "carSales", label: t.carSales },
    { id: "electronics", label: t.electronics },
    { id: "koreanCourses", label: t.koreanCourses },
    { id: "koreanUniv", label: t.koreanUniv },
  ];

  const tabImages = {
    onlineStore: "/images/demo/onlineshop.jpg",
    intlTransport: "/images/demo/logistic.jpg",
    webIntro: "/images/demo/webintro.jpg",
    travelAgency: "/images/demo/travel.jpg",
    education: "/images/demo/education.jpg",
    carSales: "/images/demo/carsale.jpg",
    electronics: "/images/demo/electric sales.jpg",
    koreanCourses: "/images/demo/courses.jpg",
    koreanUniv: "/images/demo/Agency.jpg",
  };

  const tabContent = {
    onlineStore: {
      title: t.onlineStore,
      description: t.onlineStoreDesc,
      content: t.onlineStoreContent,
      image: "/images/demo/onlineshop.jpg",
      features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Mobile Responsive", "Payment Integration"],
    },
    intlTransport: {
      title: t.intlTransport,
      description: t.intlTransportDesc,
      content: t.intlTransportContent,
      image: "/images/demo/logistic.jpg",
      features: ["Shipment Tracking", "Global Coverage", "Real-time Updates", "Cost Calculator", "Service Booking"],
    },
    webIntro: {
      title: t.webIntro,
      description: t.webIntroDesc,
      content: t.webIntroContent,
      image: "/images/demo/webintro.jpg",
      features: ["Service Showcase", "Portfolio Gallery", "Contact Forms", "About Section", "Testimonials"],
    },
    travelAgency: {
      title: t.travelAgency,
      description: t.travelAgencyDesc,
      content: t.travelAgencyContent,
      image: "/images/demo/travel.jpg",
      features: ["Destination Gallery", "Booking System", "Travel Packages", "Customer Reviews", "Travel Blog"],
    },
    education: {
      title: t.education,
      description: t.educationDesc,
      content: t.educationContent,
      image: "/images/demo/education.jpg",
      features: ["Course Catalog", "Student Portal", "Online Learning", "Faculty Directory", "Admissions"],
    },
    carSales: {
      title: t.carSales,
      description: t.carSalesDesc,
      content: t.carSalesContent,
      image: "/images/demo/carsale.jpg",
      features: ["Vehicle Inventory", "Financing Calculator", "Service Booking", "Trade-in Value", "Dealer Locator"],
    },
    electronics: {
      title: t.electronics,
      description: t.electronicsDesc,
      content: t.electronicsContent,
      image: "/images/demo/electric sales.jpg",
      features: ["Product Showcase", "Tech Reviews", "Online Store", "Warranty Info", "Support Center"],
    },
    koreanCourses: {
      title: t.koreanCourses,
      description: t.koreanCoursesDesc,
      content: t.koreanCoursesContent,
      image: "/images/demo/courses.jpg",
      features: ["Course Levels", "Native Instructors", "Cultural Content", "Progress Tracking", "Online Classes"],
    },
    koreanUniv: {
      title: t.koreanUniv,
      description: t.koreanUnivDesc,
      content: t.koreanUnivContent,
      image: "/images/demo/Agency.jpg",
      features: ["University Listings", "Application Support", "Visa Guidance", "Student Services", "Success Stories"],
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroHeader />

      <section className="relative w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
              Demo <span className="text-blue-600 dark:text-blue-400">{t.demoTitle}</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              {t.demoSubtitle}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Only Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-[800px]">
              <Image
                src={tabContent[activeTab as keyof typeof tabContent].image}
                alt={tabs.find(tab => tab.id === activeTab)?.label || "Demo Image"}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {t.aboutLandingPage}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {tabContent[activeTab as keyof typeof tabContent].content}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {t.keyFeatures}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {t.designHighlights}
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>• {t.modernDesign}</li>
                      <li>• {t.optimizedConversions}</li>
                      <li>• {t.fastLoading}</li>
                      <li>• {t.seoFriendly}</li>
                      <li>• {t.mobileFirst}</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                      {t.readyToLaunch}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 mb-4">
                      {t.readyToLaunchText}
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                      {t.contactUs}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="transition transform hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 duration-300"
            >
              <Link href="/">
                {t.goBackHome}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
} 