"use client";
import React from 'react';
import { SpotlightCard } from "./spotlight-card";
import { Lightbulb, Heart, Users, Target } from "lucide-react";

const valuesData = [
  {
    id: 1,
    title: "Innover",
    description: "Nous cherchons constamment à innover dans le domaine du développement web pour offrir les solutions les plus modernes et efficaces.",
    icon: Lightbulb,
    spotlightColor: "rgba(147, 51, 234, 0.2)" // Purple
  },
  {
    id: 2,
    title: "Engager",
    description: "Nous nous engageons à offrir un service client exceptionnel et à bâtir des relations solides avec nos clients.",
    icon: Heart,
    spotlightColor: "rgba(236, 72, 153, 0.2)" // Pink
  },
  {
    id: 3,
    title: "Collaborer",
    description: "Nous croyons en la collaboration étroite avec nos clients pour comprendre leurs besoins et créer des solutions sur mesure.",
    icon: Users,
    spotlightColor: "rgba(59, 130, 246, 0.2)" // Blue
  },
  {
    id: 4,
    title: "Exécuter",
    description: "Nous exécutons chaque projet avec précision et professionnalisme, en veillant à respecter les délais et les objectifs.",
    icon: Target,
    spotlightColor: "rgba(16, 185, 129, 0.2)" // Green
  }
];

const ValuesSection = () => {



  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 transition-colors duration-300">

      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--primary-color)]">
          Nos Valeurs
        </h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          Découvrez les principes fondamentaux qui guident notre approche et notre engagement envers l'excellence.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl w-full">
        {valuesData.map((value) => {
          const IconComponent = value.icon;
          return (
            <SpotlightCard 
              key={value.id}
              className="w-full h-[320px] sm:h-[350px] p-6 flex flex-col gap-4 bg-gray-800/30 backdrop-blur-md rounded-2xl" 
              spotlightColor={value.spotlightColor}
            >
              <div className="flex justify-center mb-2">
                <div className="p-3 rounded-full bg-gray-800/50 dark:bg-gray-200/50">
                  <IconComponent 
                    className="w-8 h-8 text-purple-400 dark:text-purple-600" 
                    style={{ color: 'var(--icon-color)' }}
                  />
                </div>
              </div>
              
              <h3 
                className="text-xl sm:text-2xl font-bold text-start mb-3" 
                style={{ color: 'var(--heading-text)' }}
              >
                {value.title}
              </h3>
              
              <p 
                className="text-sm sm:text-base text-start leading-relaxed flex-1 flex items-center text-white" 
                style={{ color: 'var(--paragraph-text)' }}
              >
                {value.description}
              </p>
              
              <div className="mt-auto pt-4">
                <div 
                  className="w-full h-1 rounded-full opacity-50"
                  style={{ backgroundColor: value.spotlightColor.replace('0.2', '0.8') }}
                />
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};

export { ValuesSection };