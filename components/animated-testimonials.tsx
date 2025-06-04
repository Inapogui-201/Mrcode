"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  className?: string
}

export function AnimatedTestimonials({
  title = "Qui sommes-nous ?",
  subtitle = "Chez Mr.Code, nous transformons les défis numériques en opportunités de croissance. Notre passion ? Créer des solutions web sur mesure qui propulsent votre entreprise vers de nouveaux sommets.Nous ne nous contentons pas de développer des sites web. Nous construisons des expériences numériques qui racontent l'histoire unique de votre marque et engagent vos clients.",
  badgeText = "A propos de nous",
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-24 -mt-20 overflow-hidden ${className || ""}`}>
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 w-full md:grid-cols-2 md:gap-16 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] border border-[var(--primary-color)]/20">
                  <Star className="mr-1 h-3.5 w-3.5 fill-[var(--primary-color)] text-[var(--primary-color)]" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-white">{title}</h2>

              <p className="max-w-[600px] text-gray-300 text-base md:text-lg lg:text-xl/relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-[var(--primary-color)]" : "w-2.5 bg-gray-600"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div 
            variants={itemVariants} 
            className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
          >
            <div className="relative w-full h-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 w-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 100,
                    scale: activeIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ zIndex: activeIndex === index ? 10 : 0 }}
                >
                  <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700/50 shadow-xl rounded-xl p-4 sm:p-6 md:p-8 h-full flex flex-col w-full max-w-full overflow-hidden">
                    <div className="mb-4 sm:mb-6 flex gap-1 sm:gap-2">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-[var(--primary-color)] text-[var(--primary-color)]" />
                        ))}
                    </div>

                    <div className="relative mb-4 sm:mb-6 flex-1 overflow-hidden">
                      <Quote className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 h-6 w-6 sm:h-8 sm:w-8 text-[var(--primary-color)]/20 rotate-180" />
                      <div className="relative z-10 pl-4 sm:pl-6">
                        <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-100 break-words hyphens-auto">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>

                    <Separator className="my-3 sm:my-4 bg-gray-700" />

                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border border-gray-600 flex-shrink-0">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-gray-800 text-white text-sm sm:text-base">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white text-sm sm:text-base truncate">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-400 break-words">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements - cachés sur très petits écrans */}
            <div className="absolute -bottom-6 -left-6 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl bg-[var(--primary-color)]/5 hidden sm:block"></div>
            <div className="absolute -top-6 -right-6 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl bg-[var(--primary-color)]/5 hidden sm:block"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}