"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DISEASES } from "@/constant/diseases";
import { TeaDisease } from "@/types/tea-types";

import SectionDivider from "../../../public/waves.svg";
import useIsMobile from "@/hooks/isMobile";
import InformationModal from "./information-modal/InformationModal";

interface Props {
  divider?: boolean;
}

export default function Information({ divider = true }: Props) {
  const [information, setInformation] = useState<TeaDisease | null>(null);
  const isMobile = useIsMobile();

  return (
    <div className="bg-[#e6ddc5]" id="informasi">
      {divider && (
        <Image src={SectionDivider} alt="" className="w-full relative" />
      )}
      <div className="flex flex-col px-6 md:px-12 lg:px-24 pb-12 gap-12">
        <p className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-[#3b2f23]">
          Kenali Penyakitnya!
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            {information && !isMobile && (
              <p className="font-poppins text-xl font-semibold text-[#3b2f23] mb-2">
                {information.name}
              </p>
            )}
            <p className="font-poppins text-base md:text-lg lg:text-xl font-light text-[#3b2f23]">
              {information && !isMobile
                ? information.description
                : `Daun teh bisa terlihat mirip-mirip walau sebenarnya sedang terserang
              penyakit yang berbeda. Di bagian ini, kamu bisa mengenali
              jenis-jenis penyakit umum pada daun teh, lengkap dengan ciri
              visualnya. Penting buat tahu sejak awal supaya bisa langsung ambil
              tindakan yang tepat.`}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {DISEASES.map((item, index) => (
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                key={`${item.slug}-${index}`}
                className="object-cover rounded-xl hover:cursor-pointer transition-transform duration-100 ease-in-out hover:scale-105"
                onClick={() => setInformation(item)}
              />
            ))}
          </div>
          <InformationModal
            isOpen={isMobile && !!information}
            onClose={() => setInformation(null)}
            disease={information}
          />
        </div>
      </div>
    </div>
  );
}
