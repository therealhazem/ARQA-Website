"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scrolls to top when the route changes so each page starts at the top. */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
