import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram, MessageCircle, MapPin, ChevronDown, BookOpen, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES, CATEGORIES } from '../data/articles';

/* --- ASSETS --- */
const LINKS = [
    {
        id: 'mapa',
        title: 'O Método M.A.P.A.',
        subtitle: 'Avaliação & Causa',
        description: 'Nosso processo exclusivo de avaliação detalhada para identificar a verdadeira causa das suas queixas.',
        ctaText: 'AGENDAR AVALIAÇÃO',
        image: '/card-mapa.png',
        url: 'https://mapa.clinicaplenasaude.com/',
        align: 'left'
    },
    {
        id: 'pele',
        title: 'Pele Plena',
        subtitle: 'Saúde & Estética',
        description: 'Programas de gerenciamento de pele para tratar acne, manchas e envelhecimento com acompanhamento contínuo.',
        ctaText: 'VER PLANOS',
        image: '/card-pele.png',
        url: 'https://peleplena.clinicaplenasaude.com/',
        align: 'right'
    },
    {
        id: 'procedimentos',
        title: 'Procedimentos',
        subtitle: 'Menu Clínico',
        description: 'Lista completa dos serviços avulsos: Botox, Preenchimentos, Bioestimuladores, Lasers e mais.',
        ctaText: 'VER LISTA COMPLETA',
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
    const [isOpen, setIsOpen] = useState(false);
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

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div
            ref={ref}
            onClick={toggleOpen}
            className={`group relative w-full block rounded-lg mb-12 perspective-1000 cursor-pointer transition-all duration-500`}
            // Removendo altura fixa para permitir expansão, usando min-height
            style={{ minHeight: isOpen ? 'auto' : '400px', rotateX, rotateY, transformStyle: "preserve-3d" }}
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
        >
            {/* 3D Container - precisa crescer com o conteúdo pai */}
            <motion.div
                layout
                className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 flex flex-col min-h-[400px] md:min-h-80 bg-brand-dark"
                transition={{ layout: { duration: 0.3 } }}
            >
                {/* Background Image - Absolute para cobrir tudo */}
                <div className="absolute inset-0 bg-black">
                    <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-all duration-1000 ease-out"
                        style={{ translateZ: "50px" }}
                        animate={isOpen ? { scale: 1.05, opacity: 0.5 } : { scale: 1, opacity: 0.5 }}
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div
                    className={`relative z-10 w-full p-8 flex flex-col justify-end h-full mt-auto ${item.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
                    style={{ transform: "translateZ(80px)" }}
                >
                    <motion.div
                        layout
                        className="glass-panel p-6 rounded-sm max-w-[95%] md:max-w-[85%] backdrop-blur-md border-l-2 border-brand-gold bg-black/40"
                    >
                        <p className="text-brand-gold text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-2 font-bold">
                            {item.subtitle}
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream leading-tight mb-4 drop-shadow-lg">
                            {item.title}
                        </h2>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-brand-cream/90 text-sm md:text-base mb-6 leading-relaxed font-sans font-light border-t border-brand-gold/30 pt-4 mt-2">
                                        {item.description}
                                    </p>

                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Impede o clique no botão de fechar o card
                                        className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#d8bc8c] text-brand-dark px-6 py-3 rounded-sm font-bold tracking-[0.2em] uppercase text-xs md:text-sm whitespace-nowrap hover:bg-white transition-all duration-500 shadow-2xl z-10 w-full md:w-auto"
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

                                        <span className="relative z-20 flex items-center gap-3">
                                            {item.ctaText}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 flex items-center gap-2 text-brand-gold/70 text-sm tracking-widest uppercase"
                            >
                                <span className="text-[10px]">Saiba mais</span>
                                <ChevronDown className="w-4 h-4 animate-bounce" />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* --- BLOG PREVIEW SECTION --- */
const BlogPreviewCard = ({ article }) => {
    const category = CATEGORIES[article.category];

    return (
        <Link to={`/blog/${article.slug}`} className="group block">
            <motion.div
                className="relative overflow-hidden rounded-lg border border-white/10 bg-brand-dark/50 backdrop-blur-sm transition-all duration-500 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/10"
                whileHover={{ y: -5 }}
            >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                    <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Category Tag */}
                    <span className="inline-block text-xs tracking-[0.2em] uppercase text-brand-gold font-bold mb-3">
                        {category?.name || article.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-brand-cream mb-3 leading-tight group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                        {article.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-brand-cream/50">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                            {new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            {article.readingTime} min
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const BlogPreviewSection = () => {
    const latestArticles = ARTICLES.slice(0, 3);

    if (latestArticles.length === 0) return null;

    return (
        <section className="w-full max-w-6xl px-4 mt-8 mb-16 relative z-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand-gold text-sm tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4" />
                        Insights & Ciência
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4">
                        Conhecimento que <span className="text-brand-gold italic">transforma</span>
                    </h2>
                    <p className="text-brand-cream/60 max-w-xl mx-auto">
                        Artigos sobre saúde estética, longevidade e os segredos por trás de resultados reais.
                    </p>
                </motion.div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {latestArticles.map((article, index) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <BlogPreviewCard article={article} />
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
                <Link
                    to="/blog"
                    className="group inline-flex items-center gap-3 border border-brand-gold/40 text-brand-gold px-8 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-xs md:text-sm hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
                >
                    Ver Todos os Artigos
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default function Home() {
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

            {/* CONCIERGE CTA - Before blog for better conversion */}
            <section className="w-full max-w-4xl px-4 mt-8 mb-16 relative z-20">
                <div className="border border-brand-gold/20 bg-gradient-to-b from-brand-gold/5 to-transparent p-8 md:p-10 rounded-sm backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <p className="text-brand-cream text-xl md:text-2xl font-serif italic text-center md:text-left">
                        Não sabe por onde começar?
                    </p>

                    <a
                        href="https://wa.me/5513988595323"
                        target="_blank"
                        className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#d8bc8c] text-brand-dark px-8 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-xs md:text-sm whitespace-nowrap hover:bg-white transition-all duration-500 shadow-2xl z-10 w-full md:w-auto"
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

                        <span className="relative z-20 flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Falar com a Equipe
                        </span>
                    </a>
                </div>
            </section>

            {/* BLOG PREVIEW SECTION */}
            <BlogPreviewSection />

            {/* FOOTER */}
            <footer className="flex flex-col items-center gap-10 py-12 z-20">
                <img src="/logo-wide.png" alt="Plena Saúde" className="h-14 grayscale invert opacity-80" />
                <div className="flex gap-10 opacity-50 hover:opacity-100 transition-opacity duration-300">
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
