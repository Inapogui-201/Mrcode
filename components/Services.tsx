// CardHoverEffectDemo.tsx
import { HoverEffect } from "./cardEffect";
import { workExperiences } from "../data";

export function CardHoverEffectDemo() {
  return (
    <section className="py-20 w-full black-gradient -mt-20" id="services">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--primary-color)] text-center">
        Nos services
      </h2>
      <div className="max-w-7xl mx-auto px-8 mt-4">
        <HoverEffect items={workExperiences}/>
      </div>
    </section>
  );
}
