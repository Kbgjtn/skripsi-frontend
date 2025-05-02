import React from "react";
import TeaGallery from "./tea-gallery/TeaGallery";

export default function Information() {
  return (
    <div className="bg-[#cae0b2]">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 h-full flex flex-col gap-24 "
        id="tutorial"
      >
        <h1 className="text-5xl font-bold leading-tight text-black">
          Jenis-jenis Penyakit
        </h1>
        <TeaGallery />
      </div>
    </div>
  );
}
