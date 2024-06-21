import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

const runocr = async (imageFile) => {
  const prompt = "you are a image to text extracting model so extract text from image and nothing else";

  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  return new Promise((resolve, reject) => {
    reader.onload = async () => {
      const imageData = reader.result.split(',')[1]; // Extract base64 part

      const image = {
        inlineData: {
          data: imageData,
          mimeType: imageFile.type,
        },
      };

      try {
        const result = await model.generateContent([prompt, image]);
        resolve(result.response.text());
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

export default runocr;
