import React from "react";
import { tutorial } from "@/constant/tutorial";
import Image from "next/image";

export default function Tutorial() {
  return (
    <div
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 h-full flex flex-col gap-24"
      id="tutorial"
    >
      <h1 className="text-5xl font-bold leading-tight text-[#00582c]">
        Cara Menggunakan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tutorial.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center px-4"
          >
            <Image
              src={item.picture}
              width={64}
              height={64}
              alt={`${item.name}`}
            />
            <p className="font-semibold text-xl">{item.name}</p>
            <p className=" text-gray-700 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
