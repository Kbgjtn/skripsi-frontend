"use client";

import React, { useEffect, useState } from "react";
import { usePredictionStore } from "@/store/prediction-store";

import Results from "@/components/results/Results";
import Information from "@/components/information/Information";
import Tutorial from "@/components/tutorial/Tutorial";

export default function Page() {
  const prediction = usePredictionStore((state) => state.prediction_data);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!prediction.length) {
      window.location.replace("/");
    }
  }, [prediction]);

  if (!isClient || !prediction.length) return <div className="h-screen w-full bg-white"/>;

  return (
    <div>
      <Results data={prediction} />
      <Information divider={false}/>
      <Tutorial />
    </div>
  );
}
