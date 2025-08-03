"use client";

import { getPrediction } from "@/services/api";
import { usePredictionStore } from "@/store/prediction-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function DetectionWrapper() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const setPredictionData = usePredictionStore(
    (state) => state.setPredictionData,
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const imageSize = 224;

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = e.target.files[0];

    setSelectedFile(files);
    // Nanti kasih handler, kalau input bukan image atau video nantinya bakal invalid.
  };

  const handleProcess = async () => {
    if (!selectedFile) return;
    try {
      setIsLoading(true);
      const response = await getPrediction(selectedFile, imageSize);
      setPredictionData(response);
      router.push("/hasil");
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /* const SliderImage = useMemo(() => {
    return selectedFile ? (
      <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-[24px] w-full">
        <label htmlFor="imgsz" className="text-center text-white">
          <strong>Select Image Size:</strong>
        </label>
        <input
          type="range"
          id="imgsz"
          step={4}
          max={1280}
          min={32}
          onChange={(v) => setImageSize(parseInt(v.target.value))}
        />
        <p className="text-white">
          <strong>{imageSize}</strong>
        </p>
      </div>
    ) : null;
  }, [selectedFile, imageSize]); */

  return (
    <div className="flex flex-col gap-[12px] items-center lg:items-start">
      <p className="font-poppins text-[16px] sm:text-[20px] lg:text-[24px] text-[#f4fffb] text-center lg:text-left">
        Gunakan teknologi visual cerdas untuk tahu kondisi tanaman Anda. Cukup
        unggah gambar atau video!
      </p>
      {selectedFile && (
        <div className="flex justify-center items-center w-full">
          {selectedFile.type.startsWith("image/") ? (
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt={selectedFile.name}
              width={200}
              height={200}
            />
          ) : selectedFile.type.startsWith("video/") ? (
            <video
              width={200}
              height={200}
              controls
              src={URL.createObjectURL(selectedFile)}
              className="rounded-lg"
            />
          ) : (
            <p className="text-white font-poppins italic">
              File tidak didukung!
            </p>
          )}
        </div>
      )}
      <p
        className={`${selectedFile ? "opacity-100" : "opacity-0"} text-[#f4fffb] italic font-light text-[14px] sm:text-[16px] overflow-hidden duration-300 ease-in-out transition-all text-center font-poppins h-[24px] w-full`}
      >
        File yang anda unggah: {selectedFile?.name}
      </p>

      {/* {SliderImage} */}

      <div className="flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-[24px] w-full">
        <input
          type="file"
          accept="image/*,video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
        <button
          className={`${isLoading ? "bg-[#c3c3c3] text-[#14231b] hover:cursor-not-allowed z-1" : "bg-[#f4fffb] text-[#274534] hover:cursor-pointer z-1"} font-poppins font-normal px-[36px] py-[10px] sm:px-[48px] sm:py-[12px] rounded-full hover:brightness-90 transition duration-300 z-1`}
          onClick={handleButtonClick}
          disabled={isLoading}
        >
          {selectedFile ? "Ganti File" : "Unggah File"}
        </button>
        <button
          className={`overflow-hidden transition-all duration-300 ease-in-out
            ${
              selectedFile
                ? "max-w-[500px] px-[36px] py-[10px] sm:px-[48px] sm:py-[12px] opacity-100 z-1"
                : "max-w-0 px-0 py-0 opacity-0 z-1"
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
