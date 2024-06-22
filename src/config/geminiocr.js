import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

const runocr = async (imageFile) => {
  const prompt = "the image will provide you a question and answer of social science subject of class 10 ncert bord and you have to judge the answer according to marking patern used by teachers. so at first give summery that the answer provided is correct, could be improved, or wrong or excellent then  you have to give response in 3 way that is first what is good things in answer, second what could be improved if it is not a perfect answer written and last thing is assign marks out of 5   at last give the perfect answer for that question";

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
};

export default runocr;
