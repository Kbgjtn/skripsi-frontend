"use client";

import React, { useRef, useState } from "react";

export default function Header() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState("");

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
    if (!selectedFile) {
      return;
    }
    console.log("file here:", selectedFile?.name);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setPrediction(data.predictions);
    } catch (error) {
      console.error("Upload error:", error);
      setPrediction("Gagal memuat hasil prediksi.");
    }
    // TODO: API call here
  };

  return (
    <div className="relative bg-[url('/bg-leaves.webp')] bg-cover bg-center text-white h-screen">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-48 flex flex-col md:flex-row items-center gap-12 h-full justify-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unggah.
            <br />
            Analisis.
            <br />
            Panen Sehat.
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
          <p className="text-lg md:text-xl text-center">
            Gunakan teknologi visual cerdas untuk tahu kondisi tanaman Anda.
            Cukup unggah gambar atau video!
          </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <div
            className={`text-sm text-white italic transition-all duration-300 ${
              selectedFile
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {selectedFile && `File: ${selectedFile.name}`}
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <button
              onClick={handleButtonClick}
              className={`bg-white ease-in-out text-green-800 font-semibold px-8 py-3 rounded-full hover:cursor-pointer transition duration-300 hover:brightness-90 ${selectedFile ? "-translate-x-4" : "translate-x-0"}`}
            >
              {selectedFile ? "Ganti Gambar" : "Unggah Gambar"}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                selectedFile
                  ? "opacity-100 scale-100 w-auto"
                  : "opacity-0 scale-90 w-0"
              }`}
            >
              <button
                onClick={handleProcess}
                className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 hover:cursor-pointer transition duration-200"
              >
                Deteksi!
              </button>
            </div>
              {prediction &&
                prediction.map((item: any, index: number) => (
                  <div key={index}>
                    {item.class}: {item.confidence}%
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
