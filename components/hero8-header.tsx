"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
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
    if (href.startsWith('#')) {
      // For anchor links, check if we're on home page and the specific anchor
      if (pathname === '/') {
        // Default to features being active on home page
        if (href === '#features') return true;
        // For other anchors, you might want to add scroll detection later
        return false;
      }
      return false;
    }
    // For page routes, check exact match
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

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-md text-black ml-12">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`block duration-150 ${
                          isActive(item.href)
                            ? "text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`block duration-150 ${
                          isActive(item.href)
                            ? "text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language Selector */}
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
