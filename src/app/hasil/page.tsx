"use client";

import React, { useEffect, useState } from "react";
import { usePredictionStore } from "@/store/prediction-store";

import Results from "@/components/results/Results";
import Information from "@/components/information/Information";
import Tutorial from "@/components/tutorial/Tutorial";

export default function Page() {
  const prediction = usePredictionStore((state) => state.prediction_data);
  const [isClient, setIsClient] = useState(false);

  const { results } = prediction;

  useEffect(() => {
    setIsClient(true);

    if (!prediction.filename) {
      window.location.replace("/");
    }
  }, [prediction]);

  if (!isClient || !prediction.filename)
    return <div className="h-screen w-full bg-white" />;

  return (
    <div>
      <Results data={results} />
      <Information divider={false} />
      <Tutorial />
    </div>
  );
}
