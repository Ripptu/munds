import { motion } from "motion/react";

export default function Impressum() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="py-32 px-10 max-w-4xl mx-auto pt-40"
    >
      <h1 className="font-serif text-5xl md:text-6xl tracking-tighter mb-12">Impressum</h1>
      
      <div className="space-y-8 text-neutral-300 text-lg leading-relaxed">
        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">Angaben gemäß § 5 TMG</h2>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            <strong className="text-white">M&S Bauelemente</strong><br />
            Fröbelstr. 13<br />
            72770 Reutlingen
          </p>
        </section>

        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">Kontakt</h2>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Telefon: <a href="tel:071217537080" className="hover:text-brand transition-colors">07121/ 7537080</a><br />
            E-Mail: <a href="mailto:Info.msbauelemente@gmx.de" className="text-brand hover:underline">Info.msbauelemente@gmx.de</a>
          </p>
        </section>

        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">Umsatzsteuer-ID</h2>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>
        </section>

        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">Streitschlichtung</h2>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline ml-1">
              https://ec.europa.eu/consumers/odr
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
