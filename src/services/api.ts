const apiUrl = process.env.NEXT_PUBLIC_API_URL;
async function upload(media: File) {
  const formData = new FormData();
  formData.append("file", media);

  try {
    const response = await fetch(`${apiUrl}/upload`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}

async function predict(name: string, imageSize: number) {
  try {
    const params = new URLSearchParams();
    params.append("imgsz", imageSize.toString());

    const response = await fetch(
      `${apiUrl}/predict/${name}?${params.toString()}`,
    );
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Predict error:", error);
    throw error;
  }
}

export async function getPrediction(media: File, imageSize: number) {
  const uploaded = await upload(media);
  const predicted = await predict(uploaded?.filename, imageSize);

  return predicted;
}
