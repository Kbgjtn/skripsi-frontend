"use client";

import React from "react";
import { TUTORIAL } from "@/constant/tutorial";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WavesBlurredDivider from "../../../public/waves-blurred.svg";

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 left-[-16px]`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronLeft size={32} className="text-gray-800" />
    </div>
  );
}

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 right-[-16px]`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight size={32} className="text-gray-800" />
    </div>
  );
}

const SLIDER_SETTINGS = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Tutorial() {
  return (
    <div id="tutorial" className="bg-white ">
      <Image src={WavesBlurredDivider} alt="" className="w-full -mt-1" />
      <div className="flex flex-col gap-[24px] px-[24px] md:px-[72px] lg:px-[108px] py-[48px]">
        <p className="font-poppins text-[30px] sm:text-[36px] lg:text-[48px] font-bold text-[#2a2c35] w-full text-center">
          Panduan penggunaan website
        </p>
        <p className="font-poppins text-[16px] font-light text-center">
          Dengan teknologi Computer Vision, website ini dibuat untuk mempermudah
          proses identifikasi penyakit pada daun teh cukup dengan mengunggah
          gambar daun teh.
        </p>
        <div className="hidden md:flex justify-center w-full pt-[24px]">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[128px]">
            {TUTORIAL.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center max-w-[220px] h-full justify-between"
              >
                <p className="font-poppins font-semibold text-[24px]">
                  {item.name}
                </p>
                <Image
                  src={item.picture}
                  width={128}
                  height={128}
                  alt={`${item.name}`}
                />
                <p className="text-gray-700 font-poppins text-[16px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden block p-6">
          <Slider {...SLIDER_SETTINGS}>
            {TUTORIAL.map((item, index) => (
              <div
                key={index}
                className="!flex justify-center items-center w-full"
              >
                <div className="flex flex-col items-center gap-4 text-center w-[220px] h-full justify-between">
                  <p className="font-poppins font-semibold text-[24px]">
                    {item.name}
                  </p>
                  <Image
                    src={item.picture}
                    width={128}
                    height={128}
                    alt={`${item.name}`}
                  />
                  <p className="text-gray-700 font-poppins text-[16px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
