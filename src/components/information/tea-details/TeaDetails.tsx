import { TeaDisease } from "@/types/tea-types";
import React from "react";

interface TeaDetailsProps {
  disease?: TeaDisease;
}

export default function TeaDetails({ disease }: TeaDetailsProps) {
  const { name, description, cause } = disease || {};

  return (
    <div className="flex items-center justify-center w-1/2">
      {disease ? (
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="mt-2">{description}</p>
          <p className="mt-2">{cause ? `Penyebab: ${cause}` : null}</p>
        </div>
      ) : (
        <p className="text-gray-500">Klik untuk lihat detail penyakit</p>
      )}
    </div>
  );
}
