
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, EDUCATION, SKILLS, WIKI_ENTRIES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Diljit Singh's engineering portfolio. 
Diljit is a 4th-year MEng Mechanical Engineering (Automotive) student at the University of Birmingham.

Background Information:
- Profile: Diljit is an aspiring mechanical engineer with a strong growth mindset. He is proficient in Fusion 360, Ansys, and creative tools like Davinci Resolve.
- Education: University of Birmingham (MEng Automotive) and James Watt College (Manufacturing).
- Experiences: Student Ambassador, Mentor, Alstom Intern, Mechanic Apprentice.
- Skills: Engineering design (Fusion 360, FEA, CFD), Technical writing, Problem solving, Creative Software (Lightroom, Davinci Resolve), and he is an Olympic Weightlifter.

Your Tone:
- Professional, technical yet accessible, and ambitious.
- Highlight his unique mix of hard engineering skills and creative/mentoring experience.
- If asked about his personality, mention his dedication to weightlifting and life documentation.

Background Data:
- Projects: ${JSON.stringify(PROJECTS)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Education: ${JSON.stringify(EDUCATION)}
- Skills: ${JSON.stringify(SKILLS)}
- Wiki: ${JSON.stringify(WIKI_ENTRIES)}

Always encourage visitors to view his CV or contact him via LinkedIn (linkedin.com/in/diljitsingh03/) or Instagram (@hashtagdiljit).
`;

export async function askAssistant(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The assistant is currently offline. Please reach out to Diljit directly!";
  }
}
