// import DummyJson from "../../public/dummy-response.json";

// const DUMMY = DummyJson.predictions;

export async function predict(media: File) {
  /* 
    replace this with an actual API calls
  */
  const formData = new FormData();
  formData.append("image", media);
  try {
    const response = await fetch("https://thesis-rest.30zy.pro/predict", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const data = await response.json();
    console.log('data achieved: ', data)
    return data;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
  /*
    i just wanna test the zustand state management here to forward the data to next page
  */
}
