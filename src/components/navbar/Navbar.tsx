"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MENU_OPTIONS } from "@/constant/menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-1  sticky top-0 md:px-[108px] px-[32px] py-[24px] w-full flex justify-between items-center bg-[#3a744e]">
      <Link
        href="/"
        className="font-poppins font-bold text-[32px] md:text-[36px] text-[#f4fffb]"
      >
        CekDaunTeh
      </Link>
      <div className="hidden md:flex gap-[24px]">
        {MENU_OPTIONS.map((option, index) => (
          <a
            key={`${index}-${option.name}`}
            href={option.href}
            className="font-poppins font-semibold text-[#f4fffb] group relative"
          >
            {option.name}
            <span
              className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-[#3b5b44] transition-all duration-300"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="md:hidden text-[#f4fffb]"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} fixed top-[64px] left-0 right-0 bg-[#3a744e] text-[#f4fffb] px-[32px] py-4 space-y-4 shadow-lg font-poppins flex flex-col transition-all ease-in-out duration-200 `}>
        {MENU_OPTIONS.map((item, index) => (
          <a
            key={`mobile-${item.name}-${index}`}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="ease-in-out transition-all duration-100"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
