import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Instagram, MessageCircle, MapPin, ChevronDown } from 'lucide-react';

/* --- ASSETS --- */
const LINKS = [
  {
    id: 'mapa',
    title: 'O Método M.A.P.A.',
    subtitle: 'Avaliação & Causa',
    image: '/card-mapa.png',
    url: 'https://mapa.clinicaplenasaude.com/',
    align: 'left'
  },
  {
    id: 'pele',
    title: 'Pele Plena',
    subtitle: 'Saúde & Estética',
    image: '/card-pele.png',
    url: 'https://peleplena.clinicaplenasaude.com/',
    align: 'right'
  },
  {
    id: 'procedimentos',
    title: 'Procedimentos',
    subtitle: 'Menu Clínico',
    image: '/card-procedimentos.png',
    url: 'https://procedimentos.clinicaplenasaude.com/',
    align: 'left'
  }
];

const TICKER_ITEMS = [
  "SAÚDE INTEGRATIVA", "•", "ESTÉTICA DE RESULTADO", "•", "LONGEVIDADE", "•", "SEGURANÇA CLÍNICA", "•", "MÉTODO MAPA", "•"
];

/* --- COMPONENTS --- */

const Ticker = () => {
  return (
    <div className="w-full bg-brand-gold/10 overflow-hidden py-4 border-y border-brand-gold/20 backdrop-blur-sm z-30 relative">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="text-brand-gold text-sm tracking-[0.3em] font-medium uppercase font-sans">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const TiltCard = ({ item, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    // Check if it's a touch device or desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full h-[400px] md:h-80 block rounded-lg mb-12 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: "0 20px 50px rgba(198, 168, 124, 0.15)"
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {/* 3D Container */}
      <div className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 bg-brand-dark">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
            style={{ translateZ: "50px" }}
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90" />
        </div>

        {/* Floating Glass Panel Text */}
        <div
          className={`absolute bottom-0 w-full p-8 flex flex-col justify-end h-full ${item.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="glass-panel p-6 rounded-sm max-w-[90%] backdrop-blur-md border-l-2 border-brand-gold bg-black/20">
            <p className="text-brand-gold text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-4 font-bold">
              {item.subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-cream leading-tight mb-6 drop-shadow-lg">
              {item.title}
            </h2>
            <div className="inline-flex items-center gap-3 text-base text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-300">
              <span className="uppercase tracking-[0.2em] font-medium">Acessar</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 overflow-x-hidden bg-brand-dark">

      {/* HEADER LOGO */}
      <header className="absolute top-0 left-0 w-full z-50 p-12 flex justify-center pointer-events-none">
        <img src="/logo-wide.png" alt="Plena Saúde" className="h-16 md:h-24 brightness-0 invert opacity-70" />
      </header>

      {/* HERO SECTION PARALLAX */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark/40" />
          <img
            src="/professional.jpg"
            alt="Enfermeira Integrativa"
            className="w-full h-full object-cover object-top opacity-60"
            style={{
              objectPosition: '50% 20%',
              filter: 'contrast(1.1) brightness(0.7) sepia(0.1)'
            }}
          />
          {/* Heavy Gradient for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-serif font-bold text-brand-cream mb-8 tracking-tight leading-[0.85] text-glow">
              Rejuvenescer <br />
              <span className="text-brand-gold italic font-medium drop-shadow-sm">com Ciência</span>
            </h1>

            <p className="text-brand-cream/95 text-xl md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed mb-12">
              Estética facial de forma integrativa. <br />
              <span className="text-brand-cream/60">Cuidamos da sua saúde estética de dentro para fora.</span>
            </p>

            <div className="relative inline-flex group">

              <button
                onClick={scrollToCards}
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#d8bc8c] text-brand-dark px-8 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-xs md:text-sm whitespace-nowrap hover:bg-white transition-all duration-500 shadow-2xl z-10"
              >
                {/* Shimmer Effect (Inside Button) */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%", skewX: -20 }}
                  animate={{ x: "200%", skewX: -20 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                    width: "50%"
                  }}
                />

                {/* Button Content */}
                <span className="relative z-20 flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  Conhecer Protocolos
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-4"
        >
          <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-gold to-transparent"
              animate={{
                y: ["-100%", "200%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear"
              }}
            />
          </div>
          <motion.p
            className="text-[11px] tracking-[0.6em] text-brand-gold uppercase font-bold"
            animate={{
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          >
            Deslize
          </motion.p>
        </motion.div>
      </section>

      {/* INFINITE TICKER */}
      <Ticker />

      {/* COMPASS SECTION */}
      <section className="w-full px-6 py-16 bg-brand-dark relative z-20">
        <div className="max-w-2xl mx-auto text-center" ref={cardsRef}>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6 leading-snug">
            Você não precisa escolher entre <span className="text-brand-gold italic">saúde</span> e <span className="text-brand-gold italic">estética</span>.
          </h3>
          <p className="text-base md:text-lg text-white/50 font-sans uppercase tracking-[0.4em] font-bold">
            Sua Jornada de Plenitude
          </p>
          <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold to-transparent mx-auto mt-10 opacity-20" />
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="w-full max-w-2xl px-4 z-20 relative -mt-12">
        <div className="flex flex-col gap-6">
          {LINKS.map((link, idx) => (
            <TiltCard key={link.id} item={link} index={idx} />
          ))}
        </div>
      </section>

      {/* CONCIERGE CTA */}
      <section className="w-full max-w-md px-6 mt-16 mb-16 relative z-20">
        <div className="border border-brand-gold/20 bg-gradient-to-b from-brand-gold/5 to-transparent p-10 rounded-sm text-center backdrop-blur-sm">
          <p className="text-brand-cream text-xl font-serif mb-6 italic">
            Não sabe por onde começar?
          </p>
          <a
            href="https://wa.me/5513988595323"
            target="_blank"
            className="inline-flex items-center justify-center gap-4 bg-brand-gold text-brand-dark px-10 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-xs hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-xl shadow-brand-gold/10"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a Equipe
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center gap-10 py-12 opacity-50 z-20">
        <img src="/logo-wide.png" alt="Plena Saúde" className="h-8 grayscale invert opacity-50" />
        <div className="flex gap-10">
          <a href="https://www.instagram.com/plenasaudeeestetica/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><MapPin className="w-5 h-5" /></a>
        </div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-brand-cream/40 font-medium">
          © {new Date().getFullYear()} Plena Saúde
        </p>
      </footer>
    </div>
  );
}
