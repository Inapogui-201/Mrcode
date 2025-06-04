"use client";

import { AnimatedTestimonials } from "./animated-testimonials"

export function AboutSection() {
  return (
    <AnimatedTestimonials
      testimonials={[
        {
          id: 1,
          name: "Michel Inapogui",
          role: "Développeur Full Stack",
          company: "Mr.Code",
          content:"Je suis Développeur Full Stack en formation, je conçois des applications web avec des technologies comme React, Next.js, Tailwind CSS, TypeScript et le modèle MVC pour le backend. J'ai travaille sur plusieurs projets concrets, ce qui me permet d'apprendre en pratiquant et d'améliorer mes compétences jour après jour.",
          rating: 5,
          avatar: "/michel.jpg",
        },
        {
          id: 2,
          name: "Christ Mbuli",
          role: "Développeur Full Stack",
          company: "Mr.Code",
          content:" Je suis Développeur Full Stack, je conçois des applications web avec des technologies comme React, Next.js, Tailwind CSS, TypeScript et le modèle MVC pour le backend. J'ai travaille sur plusieurs projets concrets, ce qui me permet d'apprendre en pratiquant et d'améliorer mes compétences jour après jour.",
          rating: 5,
          avatar: "/mbuli.jpg",
        },
      ]}
    />
  );
}
