"use client";

import { teaDiseases } from "@/constant/diseases";
import React, { useState } from "react";
import TeaDetails from "../tea-details/TeaDetails";
import { TeaDisease } from "@/types/tea-types";
import Image from "next/image";

export default function TeaGallery() {
  const [selectedDisease, setSelectedDisease] = useState<TeaDisease>();

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {teaDiseases.map((item, index) => (
          <Image
            src={item.image}
            alt={`${item.name}`}
            width={200}
            height={200}
            key={`${item.slug}-${index}`}
            className="bg-black h-[100px] w-[100px] hover:cursor-pointer transition-all duration-75 ease-in-out hover:scale-110 flex items-center justify-center"
            onClick={() => {
              setSelectedDisease(item);
            }}
          />
        ))}
      </div>
      <TeaDetails disease={selectedDisease} />
    </div>
  );
}
