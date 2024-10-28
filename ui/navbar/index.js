"use client";

import TrialButton from "@/components/button/TrialButton";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useScrollListener from "@/hooks/useScrollListener";

const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const scroll = useScrollListener();

  return (
    <div
      className={clsx(
        "border-b border-[#D2D2D2] shadow-navbar padding-layout sticky top-0 bg-white transition-all z-10",
        scroll.y > 65 && scroll.y - scroll.lastY > 0 && "-translate-y-full"
      )}
    >
      <div className="w-full h-[64px] flex md:justify-center items-center md:gap-x-20 gap-x-5 sm:gap-x-10">
        {NAV_MENU.map(({ name, href }) => (
          <Link
            key={href}
            className={clsx("text-lg font-bold uppercase", href === pathname ? "text-[#232323]" : "text-[#B7B7B7]")}
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="absolute -translate-y-1/2 right-5 md:right-10 top-1/2">
        <TrialButton />
      </div>
    </div>
  );
};

export default Navbar;
