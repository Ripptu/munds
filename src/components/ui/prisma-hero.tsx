"use client";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const PrismaHero = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260513_191715_f4d7c902-5e98-454f-baaa-d6eebaa11cb0.png&w=1280&q=85"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-12 sm:px-10 max-w-7xl mx-auto flex flex-col justify-end h-full z-10 w-full pt-32">
        <div className="flex flex-col items-start text-left gap-6 lg:gap-10 pb-10">
          
          <h1
            className="font-serif leading-[0.9] tracking-tighter text-[15vw] md:text-[8vw] flex flex-col items-start"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUp text="Sonnenschutz" />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block font-sans text-lg md:text-3xl mt-4 uppercase tracking-[0.2em] font-bold text-brand"
            >
              Maßgefertigt & Exklusiv
            </motion.span>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-neutral-300 font-bold max-w-xl"
          >
            Erfahrung im Bereich Rollladen und Sonnenschutz<br/>
            HEIM & HAUS Direktvertrieb mit Montage ohne Zwischenhandel<br/>
            Bis zu 40% Ersparnis!
          </motion.p>

          <motion.a
            href="#kontakt"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-4 self-start rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-brand/90 hover:gap-5 sm:text-base mt-2"
          >
            Jetzt beraten
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
              <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export {PrismaHero}
