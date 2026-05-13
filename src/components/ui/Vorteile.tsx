"use client";
import React from "react";
import { motion } from "motion/react";
import { GlowCard } from "./spotlight-card";

const vorteile = [
  { 
    title: "Premium Qualität", 
    text: "Hochwertige Komponenten Made in Germany für höchste Langlebigkeit und Funktionalität in Ihrem Zuhause.",
    className: "lg:col-span-2 md:col-span-2"
  },
  { 
    title: "Maßarbeit", 
    text: "Passgenaue Fertigung für jede bauliche Herausforderung.",
    className: "lg:col-span-1 md:col-span-1"
  },
  { 
    title: "Direktvertrieb", 
    text: "30-40% Preisvorteil dank Verzicht auf Zwischenhandel – Qualität bezahlbar gemacht.",
    className: "lg:col-span-1 md:col-span-1"
  },
  { 
    title: "Montageservice", 
    text: "Fachgerechter Einbau durch erfahrene Monteure für ein makelloses, sicheres Ergebnis.",
    className: "lg:col-span-2 md:col-span-2"
  },
  { 
    title: "Fachberatung", 
    text: "Individuelle Lösungen & Planung bei Ihnen vor Ort.",
    className: "lg:col-span-1 md:col-span-1"
  },
  { 
    title: "Schnelle Lieferung", 
    text: "Kurze Lieferzeiten und zuverlässige Terminabsprachen.",
    className: "lg:col-span-1 md:col-span-1"
  },
];

export const Vorteile = () => {
  return (
    <section id="vorteile" className="bg-neutral-900/50 relative py-32 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl relative z-10 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto w-full text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-white mb-6">
            Ihre Vorteile
          </h2>
          <p className="text-neutral-400 text-lg">
            Warum Sie sich für uns entscheiden sollten. Profitieren Sie von unserer Erfahrung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
          {vorteile.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={item.className}
            >
              <GlowCard 
                customSize 
                glowColor="brand"
                className="w-full h-full flex flex-col justify-end p-8 md:p-10 min-h-[250px]" 
              >
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white relative z-10 transition-colors">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-bold relative z-10 tracking-wide">{item.text}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
