import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const run = async (prompt) => {
  const parts = [
    { text: "you are a teacher who check answersheets of class 10 students of ncert board India. you have to check the answer submited by students according to theri class. if the question is of 5 marks long answer type how many marks you will give now also tell where you have cut the marks if you have done so then tell what should be perfect answer according to ncert  you hve to follow a format that first you should give it marks out of 5 marks then what could be imporved and where marks is cut then perfect answer" },
    { text: "input: " },
    { text: "output: " },
  ];
  const chatSession = model.startChat({
    contents: [{ role: "user", parts }],
    generationConfig,
  });

  const result = await chatSession.sendMessage(prompt);
  return await result.response.text(); // Return the correct text
}

export default run;
