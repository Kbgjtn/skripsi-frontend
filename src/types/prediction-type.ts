interface Prediction {
  class_name: string;
  confidence: number;
}

interface Results {
  path: string;
  predictions: Prediction[];
  model: string;
}

export interface ImagePredictionResponse {
  filename: string;
  results: Results;
}
