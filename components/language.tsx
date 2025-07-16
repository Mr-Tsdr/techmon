"use client";

import { Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { LANGS } from "@/lib/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageDropdown = () => {
  const { lang, setLang } = useLanguage();
  const activeLang = LANGS.find((l) => l.code === lang);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        <Image
          src={activeLang?.flag || "/flags/en.png"}
          alt={activeLang?.label || "Language"}
          width={20}
          height={14}
          className="rounded shadow"
        />
        <span>{activeLang?.label}</span>
        <ChevronDown className="w-4 h-4" />
      </Menu.Button>

      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="py-1">
          {LANGS.map((item) => (
            <Menu.Item key={item.code}>
              {({ active }) => (
                <button
                  onClick={() => setLang(item.code as any)}
                  className={`${
                    active
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      : "text-gray-700 dark:text-gray-200"
                  } flex w-full items-center gap-2 px-4 py-2 text-sm`}
                >
                  <Image
                    src={item.flag}
                    alt={item.label}
                    width={20}
                    height={14}
                    className="rounded shadow"
                  />
                  {item.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};
