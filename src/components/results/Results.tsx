import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Placeholder from "../../../public/file.svg";
import SectionDivider from "../../../public/book.svg";
import { toTitleCase } from "@/utils/format-string";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Results({ data }) {
  const [animate, setAnimate] = useState(false);
  const { predictions, path } = data;
  const otherDiseases = predictions.slice(1, 3);

  const formattedPredictionName = predictions[0]
    ? `Penyakit: ${toTitleCase(predictions[0].class_name)} - ${(predictions[0].confidence * 100).toFixed(1)}%`
    : "";

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="px-6 md:px-16 lg:px-24 py-[72px]">
        <h1 className="font-poppins text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Hasil Deteksi Daun Teh
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex justify-center">
            {path ? (
              path.endsWith(".mp4") ||
              path.endsWith(".webm") ||
              path.endsWith(".mov") ? (
                <video
                  src={`${apiUrl}/${path}`}
                  width={240}
                  height={240}
                  controls
                  className="rounded-lg border"
                />
              ) : (
                <Image
                  src={`${apiUrl}/${path}`}
                  alt="detected-disease"
                  width={240}
                  height={240}
                  className="rounded-lg border"
                />
              )
            ) : (
              <Image
                src={Placeholder}
                alt="placeholder"
                width={240}
                height={240}
                className="rounded-lg border"
              />
            )}
          </div>
          <div className="lg:w-1/2">
            <p className="font-poppins text-lg font-semibold text-green-700 mb-2">
              {formattedPredictionName}
            </p>
            <p className="font-poppins text-gray-700 mb-6 leading-relaxed">
              {predictions[0]?.description || "-"}
            </p>

            {otherDiseases.length > 0 && (
              <>
                <p className="font-poppins text-base font-medium text-gray-800 mb-4">
                  Kemungkinan Penyakit Lain:
                </p>
                <div className="space-y-4">
                  {otherDiseases.map((item, index) => (
                    <div key={`${index}-${item.class_name}`}>
                      <div className="flex justify-between mb-1">
                        <p className="font-poppins text-gray-700">
                          {toTitleCase(item.class_name)}
                        </p>
                        <p className="font-poppins text-gray-500">
                          {(item.confidence * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-3 rounded-full bg-green-600 transition-all duration-700 ease-in-out"
                          style={{
                            width: animate
                              ? `${(item.confidence * 100).toFixed(1)}%`
                              : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/">
            <button
              className={`transition-all duration-300 ease-in-out font-poppins font-semibold rounded-full bg-[#274534] hover:bg-[#16231c] text-white cursor-pointer
                ${
                  animate
                    ? "max-w-[500px] px-9 py-2 sm:px-12 sm:py-3 opacity-100"
                    : "max-w-0 px-0 py-0 opacity-0"
                }`}
            >
              Kembali ke halaman utama
            </button>
          </Link>
        </div>
      </div>

      <Image
        src={SectionDivider}
        alt=""
        className="w-full rotate-180 -mb-1"
        priority
      />
    </div>
  );
}
