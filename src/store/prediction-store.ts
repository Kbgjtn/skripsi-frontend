import { ImagePredictionResponse } from "@/types/prediction-type";
import { create } from "zustand";

interface PredictionProps {
  prediction_data: ImagePredictionResponse;
  setPredictionData: (data: ImagePredictionResponse) => void;
}

const defaultPredictionData: ImagePredictionResponse = {
  filename: "",
  results: {
    path: "",
    model: "",
    predictions: [],
  },
};

export const usePredictionStore = create<PredictionProps>((set) => ({
  prediction_data: defaultPredictionData,
  setPredictionData: (data) => set({ prediction_data: data }),
}));