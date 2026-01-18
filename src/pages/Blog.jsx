import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft, Search, MessageCircle, CheckCircle, BookOpen, Home } from 'lucide-react';
import { ARTICLES, CATEGORIES, AUTHOR } from '../data/articles';

/* --- BLOG CARD --- */
const BlogCard = ({ article, index }) => {
    const category = CATEGORIES[article.category];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Link to={`/blog/${article.slug}`} className="group block h-full">
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-brand-dark/50 backdrop-blur-sm transition-all duration-500 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/10 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden flex-shrink-0">
                        <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        {/* Category Tag */}
                        <span className="inline-block text-xs tracking-[0.2em] uppercase text-brand-gold font-bold mb-3">
                            {category?.name || article.category}
                        </span>

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-cream mb-3 leading-tight group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                            {article.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-brand-cream/60 text-sm mb-4 line-clamp-2 flex-grow">
                            {article.subtitle}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-4 text-sm text-brand-cream/50">
                                <span className="flex items-center gap-1">
                                    📅 {new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-1">
                                    ⏱️ {article.readingTime} min
                                </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

/* --- SIDEBAR --- */
const BlogSidebar = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) => {
    return (
        <aside className="lg:sticky lg:top-8 space-y-8">
            {/* Search */}
            <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-lg font-serif font-bold text-brand-cream mb-4 flex items-center gap-2">
                    <Search className="w-4 h-4 text-brand-gold" />
                    Buscar Artigos
                </h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold/50 transition-colors"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-lg font-serif font-bold text-brand-cream mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-gold" />
                    Categorias
                </h3>
                <div className="space-y-2">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`w-full text-left px-4 py-2 rounded-sm transition-all duration-300 ${!selectedCategory
                            ? 'bg-brand-gold/20 text-brand-gold border-l-2 border-brand-gold'
                            : 'text-brand-cream/60 hover:text-brand-cream hover:bg-white/5'
                            }`}
                    >
                        Todos os Artigos
                    </button>
                    {Object.values(CATEGORIES).map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-4 py-2 rounded-sm transition-all duration-300 ${selectedCategory === category.id
                                ? 'bg-brand-gold/20 text-brand-gold border-l-2 border-brand-gold'
                                : 'text-brand-cream/60 hover:text-brand-cream hover:bg-white/5'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Trust Badges */}
            <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-lg font-serif font-bold text-brand-cream mb-4">
                    Por que confiar?
                </h3>
                <div className="space-y-3">
                    {[
                        '+500 pacientes atendidos',
                        'Enfermeira Especialista',
                        'Protocolos Baseados em Ciência',
                        'Acompanhamento Contínuo',
                    ].map((badge, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-brand-cream/70">
                            <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                            <span>{badge}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky CTA */}
            <div className="glass-panel p-6 rounded-lg border-brand-gold/30 bg-gradient-to-b from-brand-gold/10 to-transparent">
                <h3 className="text-lg font-serif font-bold text-brand-cream mb-2">
                    Não sabe por onde começar?
                </h3>
                <p className="text-sm text-brand-cream/60 mb-4">
                    Fale com nossa equipe e descubra o melhor caminho para você.
                </p>
                <a
                    href="https://wa.me/5513988595323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-6 py-3 rounded-sm font-bold tracking-widest uppercase text-xs hover:bg-white transition-all duration-300 w-full"
                >
                    <MessageCircle className="w-4 h-4" />
                    Falar com a Equipe
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </aside>
    );
};


/* --- PARALLAX CTA --- */
const ParallaxCTA = () => {
    return (
        <section
            className="relative w-full py-32 md:py-40 px-6 overflow-hidden"
            style={{
                backgroundImage: 'url(/blog-cta-bg.png)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-brand-dark/50" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-4 leading-tight">
                    Sua pele está pronta para o <br className="hidden md:block" />
                    <span className="text-brand-gold italic">próximo nível?</span>
                </h2>
                <p className="text-brand-cream/60 mb-10 text-lg max-w-xl mx-auto">
                    Não apenas leia sobre cuidados. Descubra os programas que transformam resultados.
                </p>
                <Link
                    to="/"
                    className="group inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-brand-cream transition-all duration-300 shadow-lg"
                >
                    Descobrir Soluções na Home
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

/* --- BLOG PAGE --- */
export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredArticles = useMemo(() => {
        return ARTICLES.filter((article) => {
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-brand-dark">
            {/* Header */}
            <header className="w-full py-8 px-6 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-brand-cream/60 hover:text-brand-cream transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm tracking-widest uppercase">Voltar</span>
                    </Link>
                    <Link to="/">
                        <img src="/logo-wide.png" alt="Plena Saúde" className="h-10 md:h-12 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                    </Link>
                    <div className="w-20" /> {/* Spacer for centering */}
                </div>
            </header>

            {/* Hero */}
            <section className="w-full py-16 px-6 text-center border-b border-white/5">
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center justify-center gap-2 text-sm text-brand-cream/50 mb-8">
                        <Link to="/" className="hover:text-brand-gold transition-colors flex items-center gap-1">
                            <Home className="w-3 h-3" />
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-brand-gold">Blog</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-cream mb-6">
                            Insights & <span className="text-brand-gold italic">Ciência</span>
                        </h1>
                        <p className="text-xl text-brand-cream/60 max-w-xl mx-auto">
                            Estratégias de saúde estética e conhecimento para resultados reais e duradouros.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="w-full max-w-7xl mx-auto px-6 py-16">
                {/* Mobile Search & Filters - Shown first on mobile */}
                <div className="lg:hidden mb-10 space-y-6">
                    {/* Search */}
                    <div className="glass-panel p-6 rounded-lg">
                        <h3 className="text-lg font-serif font-bold text-brand-cream mb-4 flex items-center gap-2">
                            <Search className="w-4 h-4 text-brand-gold" />
                            Buscar Artigos
                        </h3>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-brand-dark/50 border border-white/10 rounded-sm px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="glass-panel p-6 rounded-lg">
                        <h3 className="text-lg font-serif font-bold text-brand-cream mb-4 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-brand-gold" />
                            Categorias
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-2 rounded-sm transition-all duration-300 text-sm ${!selectedCategory
                                    ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold'
                                    : 'text-brand-cream/60 border border-white/10 hover:text-brand-cream hover:bg-white/5'
                                    }`}
                            >
                                Todos
                            </button>
                            {Object.entries(CATEGORIES).map(([key, cat]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedCategory(key)}
                                    className={`px-4 py-2 rounded-sm transition-all duration-300 text-sm ${selectedCategory === key
                                        ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold'
                                        : 'text-brand-cream/60 border border-white/10 hover:text-brand-cream hover:bg-white/5'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Articles Grid */}
                    <div className="lg:col-span-2">
                        {filteredArticles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredArticles.map((article, index) => (
                                    <BlogCard key={article.id} article={article} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-brand-cream/60 text-lg">
                                    Nenhum artigo encontrado.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Hidden on mobile, shown on desktop */}
                    <div className="hidden lg:block lg:col-span-1">
                        <BlogSidebar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </div>
                </div>
            </main>

            {/* Footer CTA with Parallax */}
            <ParallaxCTA />

            {/* Footer */}
            <footer className="w-full py-8 px-6 border-t border-white/10 text-center">
                <p className="text-xs tracking-widest uppercase text-brand-cream/40">
                    © {new Date().getFullYear()} Plena Saúde
                </p>
            </footer>
        </div>
    );
}
