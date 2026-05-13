import { motion } from "motion/react";

export default function Datenschutz() {
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
      <h1 className="font-serif text-5xl md:text-6xl tracking-tighter mb-12">Datenschutzerklärung</h1>
      
      <div className="space-y-8 text-neutral-300 text-lg leading-relaxed">
        
        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-semibold text-white mt-4 group-hover:text-brand/80 transition-colors duration-300">Allgemeine Hinweise</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-semibold text-white mt-4 group-hover:text-brand/80 transition-colors duration-300">Datenschutz</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <h3 className="text-xl font-semibold text-white mt-4 group-hover:text-brand/80 transition-colors duration-300">Hinweis zur verantwortlichen Stelle</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            <strong className="text-white">M&S Bauelemente</strong><br />
            Fröbelstr. 13<br />
            72770 Reutlingen<br />
            Telefon: <a href="tel:071217537080" className="hover:text-brand transition-colors">07121/ 7537080</a><br />
            E-Mail: <a href="mailto:Info.msbauelemente@gmx.de" className="text-brand hover:underline">Info.msbauelemente@gmx.de</a>
          </p>
        </section>

        <section className="space-y-4 group">
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-semibold text-white mt-4 group-hover:text-brand/80 transition-colors duration-300">Cookies</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
          <h3 className="text-xl font-semibold text-white mt-4 group-hover:text-brand/80 transition-colors duration-300">Kontaktformular</h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
