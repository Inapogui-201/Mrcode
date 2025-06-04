"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Votre",
    },
    {
      text: "site ",
    },
    {
      text: "web",
    },
    {
      text: "et",
    },
    {
      text: "vos",
    },
    {
      text: "applications",
    },
    {
      text: "sur",
    },
    {
      text: "mesure",
    },
    {
      text: "avec",
    },
    {
      text: "Mr Code",
      className: "text-[var(--primary-color)]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <TypewriterEffect words={words} />
    </div>
  );
}
