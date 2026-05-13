"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Hervorragende Arbeit. Die Montage unserer neuen Fenster verlief absolut reibungslos und super professionell. Kann ich nur weiterempfehlen.",
    name: "Familie Weber",
    role: "Kunde seit 2023",
  },
  {
    text: "Schnell, zuverlässig und ein unschlagbarer Preisvorteil dank des Direktvertriebs. Wir haben viel verglichen und hier das beste Angebot bekommen.",
    name: "Klaus M.",
    role: "Hausbesitzer",
  },
  {
    text: "Die Beratung vor Ort war sehr kompetent. Wir sind mit unserem neuen Sonnenschutz rundum zufrieden und genießen den Sommer nun auf unserer Terrasse.",
    name: "S. Müller",
    role: "Kunde",
  },
  {
    text: "Präzise Verarbeitung und ein extrem freundliches Team. Von der Planung bis zur Umsetzung war alles einwandfrei. Nur zu empfehlen!",
    name: "Familie Schmidt",
    role: "Kunde",
  },
  {
    text: "Einfach unkompliziert. Von der ersten Anfrage bis zur Montage hat alles perfekt geklappt. Top Qualität!",
    name: "Jens P.",
    role: "Kunde",
  },
  {
    text: "Hohe Qualität, die man spürt. Vielen Dank für die tolle Arbeit an unseren neuen Haustüren. Ein echter Hingucker in der Nachbarschaft.",
    name: "A. Bauer",
    role: "Kunde",
  },
  {
    text: "Wir wollten unsere alten Garagentore tauschen und haben hier eine moderne, sichere Lösung gefunden. Preis-Leistung ist absolut fair.",
    name: "Thomas W.",
    role: "Kunde",
  },
  {
    text: "Toller Service! Auf meine Sonderwünsche beim Sonnenschutz wurde sofort eingegangen und eine perfekte Maßanfertigung geliefert.",
    name: "Marion K.",
    role: "Kundin",
  },
  {
    text: "Wirklich professionell. Die Monteure haben sauber gearbeitet und alles ordentlich hinterlassen. Mit den neuen Fenstern sparen wir zudem Heizkosten.",
    name: "Dieter L.",
    role: "Kunde seit 2024",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-8 border border-neutral-700 bg-neutral-800/50 max-w-sm w-full flex flex-col justify-between min-h-[250px]" key={i}>
                  <p className="font-serif text-lg italic text-neutral-300 mb-6 leading-relaxed">"{text}"</p>
                  <div>
                    <div className="font-bold text-white tracking-widest uppercase text-sm">{name}</div>
                    <div className="text-xs text-brand uppercase tracking-widest mt-1">{role}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
    return (
        <section className="bg-neutral-900/30 overflow-hidden py-32 px-10 relative">
            <div className="max-w-7xl relative z-10 mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-2xl mx-auto w-full text-center"
                >
                    <h2 className="font-serif text-5xl md:text-6xl tracking-tighter text-white mb-6">Was unsere Kunden sagen</h2>
                    <p className="text-neutral-400 text-lg">
                        Wir bauen auf Vertrauen und Qualität. Lesen Sie, was unsere Kunden über unsere Arbeit denken.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
                </div>
            </div>
        </section>
    );
};
