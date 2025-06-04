import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Données des FAQ
const faqData = [
  {
    question: "Quels services offrez-vous ?",
    answer: "Nous offrons une gamme complète de services numériques incluant la création de sites web et d'applications, la rédaction de cahiers des charges, le marketing de contenu, le référencement naturel (SEO), ainsi que la maintenance et le support technique. Chaque service est adapté aux besoins spécifiques de votre entreprise."
  },
  {
    question: "Comment puis-je vous contacter ?",
    answer: "Vous pouvez nous contacter de plusieurs façons : par téléphone, par email, ou en utilisant le formulaire de contact sur notre site web. Nous répondons généralement dans les 24 heures et sommes disponibles pour discuter de votre projet lors d'un appel de consultation gratuit."
  },
  {
    question: "Proposez-vous des services sur mesure ?",
    answer: "Absolument ! Nous comprenons que chaque entreprise a des besoins uniques. Nous proposons des solutions entièrement personnalisées, depuis la conception jusqu'au développement, en passant par la stratégie digitale. Nous travaillons en étroite collaboration avec vous pour créer des solutions qui correspondent parfaitement à vos objectifs."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon la complexité et l'étendue du projet. Nous proposons des devis personnalisés après une analyse détaillée de vos besoins. Nous offrons également différents packages pour s'adapter à tous les budgets, des startups aux grandes entreprises. Contactez-nous pour un devis gratuit et détaillé."
  },
  {
    question: "Comment puis-je suivre l'avancement de mon projet ?",
    answer: "Nous mettons à votre disposition un espace client sécurisé où vous pouvez suivre l'avancement de votre projet en temps réel. Vous recevrez également des rapports réguliers par email et nous planifions des points de suivi périodiques pour vous tenir informé et recueillir vos retours à chaque étape importante."
  },
  {
    question: "Combien de temps faut-il pour développer un site web ?",
    answer: "Le délai de développement dépend de la complexité du projet. Un site vitrine simple peut prendre 2-4 semaines, tandis qu'une application web complexe peut nécessiter 2-6 mois. Nous établissons un planning détaillé dès le début du projet et nous nous engageons à respecter les délais convenus."
  },
  {
    question: "Proposez-vous la maintenance après livraison ?",
    answer: "Oui, nous proposons des contrats de maintenance comprenant les mises à jour de sécurité, les sauvegardes régulières, le monitoring des performances, et le support technique. Nous offrons différents niveaux de service selon vos besoins, allant de la maintenance basique au support technique complet."
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles ?",
    answer: "Nous travaillons avec des entreprises de toutes tailles, des startups en phase de lancement aux grandes corporations établies. Notre approche flexible nous permet d'adapter nos services et notre méthodologie selon la taille et les besoins spécifiques de chaque client, garantissant ainsi des solutions optimales quel que soit votre secteur d'activité."
  }
];

function FAQ() {
  return (
    <div className="w-full py-20 lg:py-40 -mt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] border border-[var(--primary-color)]/20">
                  FAQ
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl text-white md:text-5xl tracking-tighter max-w-xl text-left font-bold">
                  Questions fréquentes
                </h4>
                <p className="text-lg text-white max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-left">
                  Votre satisfaction est notre priorité. Si vous avez des questions, des préoccupations ou besoin d'informations supplémentaires, n'hésitez pas à nous contacter. Nous sommes là pour vous aider et vous assurer que votre expérience avec nous est positive et sans encombre.
                </p>
              </div>
              <div className="">
                <Button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]/90 transition-colors">
                  Autres questions ? Contactez-nous 
                  <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger className="text-white text-left hover:text-[var(--primary-color)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };