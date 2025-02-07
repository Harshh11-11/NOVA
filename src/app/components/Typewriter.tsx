"use client";
import { useState, useEffect } from "react";

export default function Typewriter() {
  const words = ["Hello,Everyone.", "I am NOVA!", "Feel free to ask me anything."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typingEffect = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 80); // Typing speed

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, words, currentWordIndex]);

  return (
    <div className="pt-[180px] pl-[160px] absolute h-screen w-full items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-medium font-serif">{text}</h1>
    </div>
  );
}
