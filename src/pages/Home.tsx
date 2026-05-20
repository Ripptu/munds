import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";
import { Testimonials } from "../components/ui/Testimonials";
import { Vorteile } from "../components/ui/Vorteile";
import { PrismaHero } from "../components/ui/prisma-hero";
import { Counter } from "../components/ui/Counter";

export default function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen!");
  };

  return (
    <>
      <div className="relative">
          <PrismaHero />
      </div>

      {/* Stats Banner */}
      <section className="relative py-20 px-6 md:px-10 bg-neutral-950/40 border-y border-neutral-800/80 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Stat 1 */}
            <motion.div 
              style={{ willChange: "transform, opacity" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-baseline mb-4 text-brand group-hover:scale-105 transition-transform duration-500">
                <Counter to={55} className="text-6xl md:text-7xl font-serif font-medium tracking-tighter" />
                <span className="text-2xl md:text-3xl ml-3 text-white/90 font-serif font-medium">Jahre</span>
              </div>
              <div className="h-px w-12 bg-brand/30 mb-6 group-hover:w-24 group-hover:bg-brand transition-all duration-500 ease-out" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                Exklusive<br/>Bauelemente
              </span>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-baseline mb-4 text-brand group-hover:scale-105 transition-transform duration-500">
                <Counter to={3} className="text-6xl md:text-7xl font-serif font-medium tracking-tighter" />
                <span className="text-2xl md:text-3xl ml-3 text-white/90 font-serif font-medium">Gen.</span>
              </div>
              <div className="h-px w-12 bg-brand/30 mb-6 group-hover:w-24 group-hover:bg-brand transition-all duration-500 ease-out" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                Erfahrung bei Rollladen<br/>& Sonnenschutz
              </span>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center justify-center h-[72px] md:h-[84px] mb-4 text-white group-hover:scale-105 transition-transform duration-500">
                <span className="text-3xl md:text-4xl font-serif font-medium tracking-tighter text-center">HEIM & <br className="md:hidden"/>HAUS</span>
              </div>
              <div className="h-px w-12 bg-brand/30 mb-6 group-hover:w-24 group-hover:bg-brand transition-all duration-500 ease-out" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                Direktvertrieb & Montage<br/>ohne Zwischenhandel
              </span>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-baseline mb-4 text-brand group-hover:scale-105 transition-transform duration-500">
                <Counter to={40} className="text-6xl md:text-7xl font-serif font-medium tracking-tighter" />
                <span className="text-4xl md:text-5xl ml-1 text-brand font-serif font-medium">%</span>
              </div>
              <div className="h-px w-12 bg-brand/30 mb-6 group-hover:w-24 group-hover:bg-brand transition-all duration-500 ease-out" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                Bis zu<br/>Ersparnis!
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-24 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl md:text-3xl leading-relaxed font-serif italic text-text-main">
                Erleben Sie Premium-Qualität für Sonnenschutz, Fenster, Haustüren und Garagentore – direkt vom Hersteller, ohne kostenintensiven Zwischenhandel.
            </p>
            <p className="text-lg text-text-main/70">
                Wir stehen für maßgeschneiderte Lösungen, präzise Verarbeitung und eine fachgerechte Montage auf höchstem Niveau. 
                Verlassen Sie sich auf persönliche Beratung, transparente Angebote und langlebige Produkte – abgestimmt auf Ihre Ansprüche.
            </p>
        </div>
      </section>

      {/* Geschichte */}
      <section id="geschichte" className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <img 
              src="https://formazin-partner.de/images/team-hochformat.jpg" 
              alt="M&S Bauelemente Team" 
              loading="lazy"
              draggable={false}
              className="w-full h-[400px] lg:h-[600px] object-cover object-center rounded-lg shadow-2xl brightness-90 relative z-10"
            />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-serif text-5xl md:text-6xl tracking-tighter mb-8 lg:mb-10 leading-none">Unsere<br/> Geschichte</h2>
              <div className="text-lg text-text-main/80 space-y-6 leading-relaxed">
                <p>Handwerk hat bei uns Tradition – und das seit Generationen. Bereits mein Großvater legte den Grundstein als Rollladen- und Sonnenschutzmechaniker.</p>
                <p>Ich selbst bin in diesem Handwerk aufgewachsen. Heute verbinde ich traditionelle Handwerkskunst mit modernen Lösungen.</p>
                <p className="border-l border-brand pl-8 font-bold text-text-main italic text-xl">Was geblieben ist: Qualität. Was neu ist: Mehr Flexibilität.</p>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Merkmale / Vorteile - REDESIGN */}
      <Vorteile />

      {/* Partner */}
      <section className="py-20 md:py-32 bg-white text-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-6 md:px-10">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter mb-12 lg:mb-20">Unsere Partner</h2>
        </div>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
          <motion.div
            style={{ willChange: "transform" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-none gap-16 md:gap-32 pr-16 md:pr-32 items-center opacity-80 hover:opacity-100 transition-opacity duration-500"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-32">
                <img src="https://s1.directupload.eu/images/260520/kmcf589o.png" alt="Partner Logo 1" className="h-16 md:h-24 lg:h-28 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://s1.directupload.eu/images/260520/uhf6opoj.png" alt="Partner Logo 2" className="h-20 md:h-28 lg:h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://s1.directupload.eu/images/260520/7rtbh4ms.jpg" alt="Partner Logo 3" className="h-24 md:h-32 lg:h-40 object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-xl md:rounded-2xl" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 lg:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
                <h2 className="font-serif text-6xl tracking-tighter mb-10">Kontakt</h2>
                <div className="text-xl space-y-2">
                    <p><strong>M&S Bauelemente</strong></p>
                    <p>Fröbelstr. 13, 72770 Reutlingen</p>
                    <p className="pt-6">07121/ 7537080</p>
                    <p className="text-brand">Info.msbauelemente@gmx.de</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" placeholder="NAME" className="w-full bg-neutral-base border-b border-text-main/20 py-4 focus:border-brand outline-none" />
                <input type="email" placeholder="E-MAIL" className="w-full bg-neutral-base border-b border-text-main/20 py-4 focus:border-brand outline-none" />
                <textarea placeholder="NACHRICHT" rows={4} className="w-full bg-neutral-base border-b border-text-main/20 py-4 focus:border-brand outline-none"></textarea>
                <div className="flex gap-4">
                  <button type="submit" className="flex-1 bg-brand text-black py-6 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity">Senden</button>
                  <a href="https://wa.me/491788289655" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 text-white flex items-center justify-center font-bold uppercase tracking-widest text-sm hover:bg-green-600 transition-opacity">WhatsApp</a>
                </div>
            </form>
        </div>
        <div className="mt-20">
            <h3 className="font-serif text-4xl tracking-tighter mb-10">Anfahrt</h3>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.546366118431!2d9.186644415671192!3d48.47547637925585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799f92966b4d375%3A0xc3f5c7151a660a1f!2sFr%C3%B6belstra%C3%9Fe+13%2C+72770+Reutlingen!5e0!3m2!1sde!2sde!4v1567683935266!5m2!1sde!2sde"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
            />
        </div>
      </section>

      <Testimonials />
    </>
  );
}
