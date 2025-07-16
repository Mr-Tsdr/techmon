"use client";

import Image from "next/image";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

export const Logo = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      document.documentElement.classList.contains("dark");

    const update = () => setIsDark(checkDark());
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isDark ? "/images/logowhite.png" : "/images/logo.png"}
      alt="logo"
      className={cn(className)}
      width={132}
      height={32}
      priority
    />
  );
};
