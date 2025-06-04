"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import Image from 'next/image';

// Types pour les projets
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Données d'exemple des projets
const projectsData: Project[] = [
  {
    id: 1,
    title: "CCCs",
    description: "Plateforme dédiée à la communauté congolaise de Casablanca-Settat ! Notre mission est de créer un espace dynamique et inclusif.",
    image: "/11.png",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://www.cccs.ma/",
    featured: true
  },
  {
    id: 2,
    title: "Troveur",
    description: "Troveur est une plateforme web qui connecte les voyageurs et les acheteurs pour faciliter l'achat et la livraison de produits à l'international.",
    image: "/12.png",
    tags: ["React Native", "Node.js", "MongoDB"],
    liveUrl: "https://www.troveur.com/",
    featured: true
  },
  {
    id: 3,
    title: "Lamergogroup",
    description: "Mergo Group vous accompagne dans votre transformation digitale avec des solutions innovantes et performantes.",
    image: "/13.png",
    tags: ["Next.js", "WebRTC", "Redis"],
    liveUrl: "https://www.lamergogroup.com/",
  }
];

// Composant principal
const ProjectsGrid: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  
  const filteredProjects = projectsData;


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--primary-color)]">
        Nos stacks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, des applications web aux solutions mobiles innovantes
          </p>
        </motion.div>

            {/* Grille des projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className={`relative group cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                
                {/* Badge Featured */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image    
                    width={400}
                    height={250}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay avec boutons */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noref errer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;