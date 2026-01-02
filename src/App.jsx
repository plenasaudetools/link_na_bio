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
    <div className="w-full bg-brand-gold/10 overflow-hidden py-3 border-y border-brand-gold/20 backdrop-blur-sm z-30 relative">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="text-brand-gold text-xs tracking-[0.2em] font-medium uppercase font-sans">
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
      className="group relative w-full h-72 md:h-80 block rounded-lg mb-8 perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {/* 3D Container */}
      <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl border border-white/5 bg-brand-dark">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 ease-out"
            style={{ translateZ: "50px" }}
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
        </div>

        {/* Floating Glass Panel Text */}
        <div
          className={`absolute bottom-0 w-full p-6 flex flex-col justify-end h-full ${item.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="glass-panel p-6 rounded-sm max-w-[85%] backdrop-blur-md border-l-2 border-brand-gold ">
            <p className="text-brand-gold text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase mb-2 font-bold">
              {item.subtitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-brand-cream leading-tight mb-4 drop-shadow-md">
              {item.title}
            </h2>
            <div className="inline-flex items-center gap-2 text-xs text-white/50 group-hover:text-brand-gold transition-colors duration-300">
              <span className="uppercase tracking-widest">Acessar</span>
              <ArrowRight className="w-4 h-4" />
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

  return (
    <div className="min-h-screen flex flex-col items-center pb-20 overflow-x-hidden">

      {/* HEADER LOGO */}
      {/* HEADER LOGO */}
      <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-center pointer-events-none">
        <img src="/logo-wide.png" alt="Plena Saúde" className="h-12 md:h-16 brightness-0 invert opacity-80" />
      </header>

      {/* HERO SECTION PARALLAX */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-end overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark" />
          <img
            src="/professional.jpg"
            alt="Enfermeira Integrativa"
            className="w-full h-full object-cover object-top opacity-80"
            style={{
              objectPosition: '50% 20%',
              filter: 'contrast(1.1) brightness(0.85) sepia(0.2)'
            }}
          />
          {/* Heavy Gradient for Text Contrast */}
          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-xl px-6 pb-24 text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Use Logo Mark or Text? Text aligns better with cinematic feel, Logo is up top. keeping text for H1 impact */}
            <p className="text-brand-gold text-xs tracking-[0.4em] uppercase mb-6 font-bold bg-black/30 inline-block px-4 py-1 rounded-full border border-white/5 backdrop-blur-sm">
              Enfermeira Integrativa
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-cream mb-6 leading-[0.9] text-glow">
              Rejuvenescer <br />
              <span className="italic text-white/40">com Ciência</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light max-w-xs mx-auto leading-relaxed mb-8">
              Cuidando da causa, não apenas do sintoma.
              Um novo olhar para sua saúde.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center gap-3 mt-8"
          >
            <div className="w-[26px] h-[42px] rounded-full border border-brand-gold/40 flex justify-center pt-2">
              <motion.div
                className="w-1 h-1.5 bg-brand-gold rounded-full"
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
            <p className="text-[10px] tracking-[0.2em] text-brand-gold/80 font-sans uppercase font-medium">
              Conheça Mais
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* INFINITE TICKER */}
      <Ticker />

      {/* COMPASS SECTION */}
      <section className="w-full px-6 py-20 bg-brand-dark relative z-20">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl font-serif text-brand-cream mb-4">
            Você não precisa escolher entre <span className="text-brand-gold italic">saúde</span> e <span className="text-brand-gold italic">estética</span>.
          </h3>
          <p className="text-sm text-white/40 font-mono uppercase tracking-widest">
            Explore o Ecossistema
          </p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent mx-auto mt-8 opacity-30" />
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="w-full max-w-2xl px-4 z-20 relative -mt-10">
        <div>
          {LINKS.map((link, idx) => (
            <TiltCard key={link.id} item={link} index={idx} />
          ))}
        </div>
      </section>

      {/* CONCIERGE CTA */}
      <section className="w-full max-w-md px-6 mt-12 mb-12 relative z-20">
        <div className="border border-brand-gold/30 bg-gradient-to-b from-brand-gold/10 to-transparent p-8 rounded-sm text-center backdrop-blur-sm">
          <p className="text-brand-cream text-lg font-serif mb-4">
            Não sabe por onde começar?
          </p>
          <a
            href="https://wa.me/5513988595323"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-dark px-8 py-3 rounded-sm font-bold tracking-widest uppercase text-xs hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-lg shadow-brand-gold/20"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com a Equipe
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center gap-8 opacity-40 z-20">
        <img src="/logo-wide.png" alt="Plena Saúde" className="h-8 grayscale invert" />
        <div className="flex gap-8">
          <a href="https://www.instagram.com/plenasaudeeestetica/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><MapPin className="w-4 h-4" /></a>
        </div>
        <p className="text-[10px] tracking-widest uppercase text-brand-cream/40">
          © {new Date().getFullYear()} Plena Saúde
        </p>
      </footer>
    </div>
  );
}
