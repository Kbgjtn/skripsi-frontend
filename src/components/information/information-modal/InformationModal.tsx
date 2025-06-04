"use client";

import React from "react";
import { X } from "lucide-react";
import { TeaDisease } from "@/types/tea-types";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  disease: TeaDisease | null;
}

export default function InformationModal({ isOpen, onClose, disease }: Props) {
  if (!isOpen || !disease) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#fffaf4] w-full max-w-md rounded-xl p-6 relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col w-full gap-[24px]">
          <p className="font-bold text-xl text-[#3b2f23] mb-3 font-poppins">
            {disease.name}
          </p>
          <div className="w-full flex justify-center items-center">
            <Image
              src={disease?.image ?? ''}
              alt="disease-image"
              width={200}
              height={200}
              className="box-content"
            />
          </div>
          <p className="text-[#3b2f23] text-base leading-relaxed font-poppins">
            {disease.description}
          </p>
        </div>
      </div>
    </div>
  );
}
