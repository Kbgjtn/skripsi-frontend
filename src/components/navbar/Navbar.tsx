"use client";

import React, { useState } from "react";
import Link from "next/link";
import { menu } from "@/constant/menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute h-full top-0 z-50 w-full">
      <div className="sticky top-0 bg-[#008240] shadow-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
          <Link href="/" className="text-2xl font-semibold">
            CekDaunTeh
          </Link>

          <nav className="hidden md:flex gap-10 text-base">
            {menu.map((item, index) => (
              <Link
                key={`${item.name}-${index}`}
                href={item.href}
                className="hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#008240] px-4 pb-4 text-white space-y-3">
            {menu.map((item, index) => (
              <Link
                key={`mobile-${item.name}-${index}`}
                href={item.href}
                className="block border-b border-white/20 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
