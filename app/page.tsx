import Hero from "../components/Hero";
import { CardHoverEffectDemo } from "../components/Services";
import Navbar from "../components/Navigation";
import { AboutSection } from "../components/AboutSection";
import { ValuesSection } from "../components/Mission";
import ProjectsGrid from "../components/projects";
import { FAQDemo } from "../components/faq";
import { Footer } from "@/components/footer";
import { DemoOne } from "../components/contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <CardHoverEffectDemo />
        </section>
        <section id="values">
          <ValuesSection />
        </section>
        <section id="projects">
          <ProjectsGrid />
        </section>
        <section id="faq">
          <FAQDemo />
        </section>
        <section id="contact">
          <DemoOne />
        </section>
      </div>
      <section id="footer" className="w-full h-full">
        <Footer />
      </section>
    </main>
  );
}
