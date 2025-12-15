import { GoogleGenAI, Type } from "@google/genai";
import { SentenceData, PartType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeSentence = async (text: string): Promise<SentenceData> => {
  const modelId = "gemini-2.5-flash";
  
  const systemInstruction = `
  You are an expert English grammar analyzer for Japanese students. 
  Your task is to analyze English sentences and break them down into their grammatical components based on the 5 Sentence Patterns (SV, SVC, SVO, SVOO, SVOC).
  
  The output must categorize parts into:
  - S (Subject): The agent or theme.
  - V (Verb): The action or state.
  - O (Object): The receiver of action.
  - C (Complement): Something describing S or O.
  - M (Modifier): Adjectives, adverbs, prepositional phrases that are not core to the pattern.
  - CONN (Connector): Conjunctions like When, If, Because (if at start of clause).

  Also assign a "Code" based on this simplified mapping:
  - 1A/1B/1C/1D: General SV/SVO patterns.
  - 2F/2G: SVC patterns (be verbs).
  - 3L/3M: Existence (There is/Here is).
  - 4N: Passive Voice.

  Return the data as a JSON object.
  `;

  const prompt = `Analyze this sentence: "${text}"`;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            code: { type: Type.STRING, description: "The pattern code (e.g. 1A, 2F)" },
            parts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  type: { type: Type.STRING, enum: ["S", "V", "O", "C", "M", "CONN"] },
                  label: { type: Type.STRING, description: "Japanese label (e.g. 誰が, どうする)" },
                  detail: { type: Type.STRING, description: "Extra detail (e.g. Time, Place)" }
                }
              }
            }
          }
        }
      }
    });

    const json = JSON.parse(response.text || "{}");
    
    // Map the string types from JSON to our Enum
    const parts = (json.parts || []).map((p: any) => ({
      text: p.text,
      type: p.type as PartType,
      label: p.label,
      detail: p.detail
    }));

    return {
      id: Date.now().toString(),
      fullText: text,
      code: json.code || "1A",
      parts: parts
    };

  } catch (error) {
    console.error("Gemini analysis failed:", error);
    throw new Error("Failed to analyze sentence.");
  }
};
