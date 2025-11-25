import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyDfUL6FMYUcU8WbrZMshV11-0JqFfDFdjI",
});

export default async function run(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Something went wrong with Gemini.";
  }
}
