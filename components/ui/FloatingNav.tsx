"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;

    if (current < 50) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }

    setLastScrollY(current);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed top-10 z-[5000] inset-x-0 mx-auto px-4 py-2 rounded-full border items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "rgba(44, 14, 89, 0.15)",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.525)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className="flex items-center space-x-2 text-base font-medium text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
          >
            {navItem.icon && <span>{navItem.icon}</span>}
            <span>{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
