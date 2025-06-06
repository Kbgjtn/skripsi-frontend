import { Prediction } from "@/types/prediction-type";
import { create } from "zustand";

interface PredictionProps {
  prediction_data: Prediction[];
  setPredictionData: (data: Prediction[]) => void;
}

export const usePredictionStore = create<PredictionProps>((set) => ({
  prediction_data: [],
  setPredictionData: (data) => set({ prediction_data: data }),
}));
