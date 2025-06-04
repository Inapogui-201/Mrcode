"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";

interface Contact2Props {
  title?: string;
  description?: string;
}

export const Contact2 = ({
  title = "Contactez-nous",
  description = "Nous sommes disponibles pour vos questions, vos retours d'expérience ou pour des opportunités de collaboration. N'hésitez pas à nous contacter!",
}: Contact2Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        firstname: userInput.firstname,
        lastname: userInput.lastname,
        phone: userInput.phone,
        email: userInput.email,
        subject: userInput.subject,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        toast("Message envoyé avec succès !", {
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        setUserInput({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Échec de l'envoi du message", {
        description:
          "Veuillez réessayer plus tard ou nous contacter directement.",
      });
      console.error("Erreur EmailJS:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 max-w-screen-xl mx-auto bg-transparent min-h-screen relative overflow-hidden">
      <Toaster />
      
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-16 lg:flex-row lg:gap-20">
          
          {/* Left side - Title and contact info */}
          <div className="mx-auto flex max-w-lg flex-col justify-between gap-12">
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-5xl font-bold lg:text-6xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight">
                {title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{description}</p>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="mx-auto flex max-w-screen-md flex-col">
            <div className="rounded-3xl border border-white/20 p-12 bg-white/5 backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Name fields */}
                <div className="flex gap-6">
                  <div className="flex-1 space-y-3">
                    <Label htmlFor="firstname" className="text-white text-sm font-medium">
                      Nom
                    </Label>
                    <Input 
                      type="text" 
                      id="firstname" 
                      name="firstname"
                      placeholder="Votre nom"
                      value={userInput.firstname}
                      onChange={handleChange}
                      className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 hover:border-white/20 transition-all duration-300 h-12 rounded-xl"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <Label htmlFor="lastname" className="text-white text-sm font-medium">
                      Prénom
                    </Label>
                    <Input 
                      type="text" 
                      id="lastname" 
                      name="lastname"
                      placeholder="Votre prénom"
                      value={userInput.lastname}
                      onChange={handleChange}
                      className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 hover:border-white/50 transition-all duration-300 h-12 rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Email field */}
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Email
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="votre@email.com"
                    value={userInput.email}
                    onChange={handleChange}
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 hover:border-white/50 transition-all duration-300 h-12 rounded-xl"
                  />
                </div>
                
                {/* contact field */}
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-white text-sm font-medium">
                    Numéro de téléphone
                  </Label>
                  <Input 
                    type="text" 
                    id="phone" 
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    value={userInput.phone}
                    onChange={handleChange}
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 hover:border-white/50 transition-all duration-300 h-12 rounded-xl"
                  />
                </div>
                
                {/* Subject field */}
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-white text-sm font-medium">
                    Objet
                  </Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={userInput.subject}
                    onChange={handleChange}
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 hover:border-white/50 transition-all duration-300 h-12 rounded-xl"
                  />
                </div>
                
                {/* Message field */}
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-white text-sm font-medium">
                    Message
                  </Label>
                  <Textarea 
                    placeholder="Écrivez votre message ici..."
                    id="message"
                    name="message"
                    rows={5}
                    value={userInput.message}
                    onChange={handleChange}
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 hover:border-white/50 transition-all duration-300 rounded-xl resize-none"
                  />
                </div>
                
                {/* Submit button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group disabled:opacity-70 disabled:cursor-not-allowed"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="flex items-center justify-center gap-3">
                    Envoyer le message
                    <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </span>
                </Button>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact2;