import React from "react";

export default function Header() {
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
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          <p className="text-lg md:text-xl text-center">
            Gunakan teknologi visual cerdas untuk tahu kondisi tanaman Anda.
            Cukup unggah gambar atau video!
          </p>
          <button className="bg-white text-green-800 font-semibold px-8 py-3 rounded-full">
            Unggah File Di Sini
          </button>
        </div>
      </div>
    </div>
  );
}
