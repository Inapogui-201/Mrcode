
// data.ts
export const workExperiences: {
  id: number;
  title: string;
  description: string;
  icon: string; // Changé de LucideIcon à string
}[] = [
  {
    id: 1,
    title: "Création De Sites Web Et D'applications",
    description:
      "Nous concevons et développons des sites web esthétiques, fonctionnels et responsives pour répondre aux besoins de votre entreprise.",
    icon: "Globe", // Nom de l'icône au lieu du composant
  },
  {
    id: 2,
    title: "Rédaction D'un Cahier De Charges",
    description:
      "Nous vous aidons à rédiger un cahier de charges clair et précis pour votre projet web. Nous sommes à l'écoute de vos besoins et de vos contraintes.",
    icon: "FileText",
  },
  {
    id: 3,
    title: "Marketing de contenu",
    description:
      "Nous créons du contenu de qualité pour votre site web et vos médias sociaux afin d'attirer, d'engager et de convertir votre public cible.",
    icon: "BarChart2",
  },
  {
    id: 4,
    title: "Référencement naturel (SEO)",
    description:
      "Nous optimisons votre site web pour les moteurs de recherche afin d'améliorer votre visibilité et d'attirer plus de trafic organique.",
    icon: "Search",
  },
  {
    id: 5,
    title: "Nos prestations",
    description: `● Audit SEO complet\n● Optimisation technique\n● Stratégie de mots-clés\n● Suivi et reporting`,
    icon: "Server",
  },
  {
    id: 6,
    title: "Maintenance et Support Technique",
    description:
      "Nous assurons la maintenance de votre site web, la mise à jour régulière de ses fonctionnalités et un support technique réactif pour garantir sa sécurité et ses performances.",
    icon: "ShieldCheck",
  },
];


export const navItems = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Services",
        link: "#services",
    },
    {
        name: "Projects",
        link: "#projects",
    },
];



