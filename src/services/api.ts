import DummyJson from "../../public/dummy-response.json";

const DUMMY = DummyJson.predictions;

export async function predict(media: File) {
  /* 
    replace this with an actual API calls
  */
  // const formData = new FormData();
  // formData.append("image", media);
  // try {
  //   const response = await fetch("http://localhost:5000/predict", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   if (!response.ok) {
  //     throw new Error(`Server responded with ${response.status}`);
  //   }
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error("Upload error:", error);
  //   throw error;
  // }
  /*
    i just wanna test the zustand state management here to forward the data to next page
  */

  if (media) {
    return DUMMY;
  } else {
    return;
  }
}
