import React from "react";
import Image from "next/image";
import DetectionWrapper from "./detection-wrapper/DetectionWrapper";

import TeaLeavesImage from "../../../public/bg-leaves.webp";

export default function Header() {
  return (
    <div
      className="px-[24px] md:px-[72px] lg:px-[108px] py-[48px] lg:h-[90vh] h-auto"
      id="beranda"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-[48px] lg:gap-[96px]">
        <div className="flex flex-col gap-[12px] text-center lg:text-left">
          <h1 className="font-poppins text-[36px] sm:text-[48px] lg:text-[72px] font-bold text-[#f4fffb] leading-tight">
            Unggah, Analisis, Panen Sehat.
          </h1>
          <DetectionWrapper />
        </div>
        <div className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[500px] h-[400px] sm:h-[500px] lg:h-[650px] rounded-full overflow-hidden relative">
          <Image
            src={TeaLeavesImage}
            alt="tea-leaves"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
