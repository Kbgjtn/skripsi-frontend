"use client";

import { predict } from "@/services/api";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function DetectionWrapper() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleProcess = async () => {
    if (!selectedFile) return;
    try {
      setIsLoading(true);
      const response = await predict(selectedFile);
      console.log("response here: ", response);
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-[12px] items-center lg:items-start">
      <p className="font-poppins text-[16px] sm:text-[20px] lg:text-[24px] text-[#f4fffb] text-center lg:text-left">
        Gunakan teknologi visual cerdas untuk tahu kondisi tanaman Anda. Cukup
        unggah gambar atau video!
      </p>
      {selectedFile && (
        <div className="flex justify-center items-center w-full">
          <Image
            src={URL.createObjectURL(selectedFile)}
            alt={selectedFile.name}
            width={200}
            height={200}
          />
        </div>
      )}
      <p
        className={`${selectedFile ? "opacity-100" : "opacity-0"} text-[#f4fffb] italic font-light text-[14px] sm:text-[16px] overflow-hidden duration-300 ease-in-out transition-all text-center font-poppins h-[24px] w-full`}
      >
        File yang anda unggah: {selectedFile?.name}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-[24px] w-full z-1">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          className={`${isLoading ? "bg-[#c3c3c3] text-[#14231b] hover:cursor-not-allowed" : "bg-[#f4fffb] text-[#274534] hover:cursor-pointer "} font-poppins font-normal z-1 px-[36px] py-[10px] sm:px-[48px] sm:py-[12px] rounded-full hover:brightness-90 transition duration-300`}
          onClick={handleButtonClick}
          disabled={isLoading}
        >
          {selectedFile ? "Ganti File" : "Unggah File"}
        </button>
        <button
          className={`overflow-hidden transition-all duration-300 ease-in-out
            ${
              selectedFile
                ? "max-w-[500px] px-[36px] py-[10px] sm:px-[48px] sm:py-[12px] opacity-100"
                : "max-w-0 px-0 py-0 opacity-0"
            }
            bg-[#274534] text-white font-semibold rounded-full font-poppins hover:cursor-pointer`}
          onClick={handleProcess}
        >
          {isLoading ? "Memproses..." : "Deteksi!"}
        </button>
      </div>
    </div>
  );
}
