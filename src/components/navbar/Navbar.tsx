import React from "react";
import Link from "next/link";

const menu = [
  {
    name: "Beranda",
    href: "#beranda",
  },
  {
    name: "Tutorial",
    href: "#tutorial",
  },
  {
    name: "Informasi",
    href: "#informasi",
  },
];

export default function Navbar() {
  return (
    <div className="sticky flex w-full h-[64px] bg-[#008240] text-white items-center justify-between px-64 shadow-xl">
      <Link href="/" className="text-[28px]">
        CekDaunTeh
      </Link>
      <div className="flex gap-12">
        {menu.map((value, index) => (
          <Link
            href={value.href}
            key={`${value.name}-menu-${index}`}
            className="text-[16px]"
          >
            {value.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
