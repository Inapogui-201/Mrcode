"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

function Footerdemo() {
  return (
    <footer className="relative bg-transparent text-white transition-colors duration-300 w-full ">
      <div className="px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Stay Connected */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Restez connecté</h2>
            <p className="mb-6 text-muted-foreground">
              Abonnez-vous à notre newsletter pour les dernières mises à jour et les offres exclusives.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Entrez votre email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">S'abonner</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Liens rapides</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors ">Accueil</a>
              <a href="#" className="block transition-colors ">A propos</a>
              <a href="#" className="block transition-colors ">Services</a>
              <a href="#" className="block transition-colors ">Projets</a>
              <a href="#" className="block transition-colors ">Contact</a>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contactez-nous</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Atlantic2</p>
              <p>Moroc, Casablanca-Ain sebaa</p>
              <p>Phone: +212 708 554 131 - +212 601 519 276</p>
              <p>Email: contact.mrcode@gmail.com</p>
            </address>
          </div>

          {/* Follow Us */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Suivez-nous</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                {[
                  { icon: <Facebook className="h-4 w-4  " />, label: "Facebook" },
                  { icon: <Twitter className="h-4 w-4 " />, label: "Twitter" },
                  { icon: <Instagram className="h-4 w-4 " />, label: "Instagram" },
                  { icon: <Linkedin className="h-4 w-4 " />, label: "LinkedIn" },
                ].map((social, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full bg-primary text-primary-foreground">
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{`Suivez-nous sur ${social.label}`}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-white">
            © 2025 Mr Code. Tous droits réservés.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-[var(--primary-color)]">Politique de confidentialité</a>
            <a href="#" className="transition-colors hover:text-[var(--primary-color)]">Conditions d'utilisation</a>
            <a href="#" className="transition-colors hover:text-[var(--primary-color)]">Paramètres de cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
