"use client";

import React, { useState } from "react";
import Typewriter from "./Typewriter";
import HoverCard from "./HoverCard";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { TypingAnimation } from "./ui/typing-animation";

export const Body = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleFetch = async () => {
    if (!prompt.trim()) return; // Prevent empty API calls
    const resultText = await Apifetch(prompt);
    setResponse(resultText);
  };

  return (
    <>
      <div className=" bg-gray-900 h-[500px] w-full">
        <Typewriter />

        <div className="pt-10">
          <input
            placeholder="Ask me anything"
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrompt(e.target.value)
            }
            onKeyDown={(e) => e.key === "Enter" && handleFetch()} // Fetch on Enter key press
            className="absolute w-[600px] mt-[230px] ml-[160px] h-[50px] bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-2 ring-transparent focus:ring-slate-100"
          />
          <div className="pt-[235px] pl-[800px]">
            <button
              onClick={handleFetch}
              className="ml-2 p-2 pl-6 pr-6  relative z-50  bg-cyan-600 text-white rounded"
            >
              Ask
            </button>
          </div>
          {/* Response Display */}
          <div className="absolute mt-[90px] ml-[150px] w-[700px]  h-[200px] p-4 bg-gray-900 border border-gray-400 rounded-lg shadow-lg overflow-y-auto">
            <p className="text-red-100 italic text-lg">
              <TypingAnimation>
                {response || "Waiting for response..."}
              </TypingAnimation>
            </p>
          </div>
        </div>
        <HoverCard />
      </div>
    </>
  );
};

// Function to call API and return response text
const Apifetch = async (prompt: string): Promise<string> => {
  try {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBdY3eyL81fK0bhvDpnneUaw6kmmd3d5Io"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt1 = "Answer as if your name is nova ." + prompt;

    const result = await model.generateContent(prompt1);
    return result.response.text(); // Return the response text
  } catch (error) {
    console.error("Error fetching API:", error);
    return "Error fetching response!";
  }
};
