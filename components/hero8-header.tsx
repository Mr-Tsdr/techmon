"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X, ArrowRight } from "lucide-react";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { LanguageDropdown } from "./language";
import { usePathname } from "next/navigation";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const { lang } = useLanguage();
  const pathname = usePathname();

  const t = translations[lang];

  const menuItems = [
    { name: t.features, href: "#features" },
    { name: t.service, href: "#services" },
    { name: t.product, href: "#product" },
    { name: t.about, href: "/about" },
    { name: t.demo, href: "/demo" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && href === "#features";
    }
    return pathname === href;
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Left: Logo + Toggle */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Desktop Menu */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-8 text-md text-black ml-12">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`block duration-150 ${
                          item.href === "/demo"
                            ? "cursor-pointer px-6 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
                            : isActive(item.href)
                              ? "text-blue-600 dark:text-blue-400 font-semibold"
                              : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          {item.name}
                          {item.href === "/demo" && <ArrowRight className="w-4 h-4" />}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Menu & Actions */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              {/* Mobile Nav Items */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`block duration-150 ${
                          item.href === "/demo"
                            ? "text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold shadow w-fit"
                            : isActive(item.href)
                              ? "text-blue-600 dark:text-blue-400 font-semibold"
                              : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          {item.name}
                          {item.href === "/demo" && <ArrowRight className="w-4 h-4" />}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language & Theme Toggles */}
              <div className="flex items-center gap-4">
                <LanguageDropdown />
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
