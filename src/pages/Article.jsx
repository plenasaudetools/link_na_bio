import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle, ChevronDown, ChevronUp, Home, Clock, Calendar, User } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles, CATEGORIES } from '../data/articles';

/* --- COMPONENTS --- */

// Article Quote Block
const QuoteBlock = ({ quote }) => (
    <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="my-10 pl-6 border-l-4 border-brand-gold bg-brand-gold/5 py-6 pr-6 rounded-r-lg"
    >
        <p className="text-xl md:text-2xl font-serif italic text-brand-cream/90">
            "{quote}"
        </p>
    </motion.blockquote>
);

// Inline CTA
const InlineCTA = ({ text, url, isSecondary = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`my-10 p-6 md:p-8 rounded-lg border text-center ${isSecondary
            ? 'border-brand-cream/10 bg-white/5'
            : 'border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 to-transparent'
            }`}
    >
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300 ${isSecondary
                ? 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark'
                : 'bg-brand-gold text-brand-dark hover:bg-white'
                }`}
        >
            {!isSecondary && (
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
            )}
            <span className="relative z-10 flex items-center gap-3">
                {text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
        </a>
    </motion.div>
);

// Internal Link Block
const InternalLink = ({ context, text, slug }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="my-8 p-6 rounded border-l-2 border-brand-gold bg-brand-gold/5 flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
    >
        <span className="text-brand-cream/60 italic text-sm">{context}</span>
        <Link
            to={`/blog/${slug}`}
            className="text-brand-gold font-bold hover:text-white transition-colors flex items-center gap-2 group"
        >
            {text}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
    </motion.div>
);

// FAQ Accordion Item
const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-white/10 last:border-none">
        <button
            onClick={onClick}
            className="w-full py-5 flex items-center justify-between text-left group"
        >
            <span className="text-lg font-serif text-brand-cream group-hover:text-brand-gold transition-colors pr-4">
                {question}
            </span>
            {isOpen ? (
                <ChevronUp className="w-5 h-5 text-brand-gold flex-shrink-0" />
            ) : (
                <ChevronDown className="w-5 h-5 text-brand-cream/50 group-hover:text-brand-gold flex-shrink-0 transition-colors" />
            )}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="pb-5 text-brand-cream/70 leading-relaxed">
                        {answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// FAQ Section
const FAQSection = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="my-16">
            <h2 className="text-3xl font-serif font-bold text-brand-cream mb-8">
                Perguntas Frequentes
            </h2>
            <div className="glass-panel rounded-lg p-6 md:p-8">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
};

// Related Articles
const RelatedArticles = ({ articles }) => {
    if (articles.length === 0) return null;

    return (
        <section className="my-16 pt-16 border-t border-white/10">
            <h2 className="text-3xl font-serif font-bold text-brand-cream mb-8">
                Continue Lendo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => {
                    const category = CATEGORIES[article.category];
                    return (
                        <Link
                            key={article.id}
                            to={`/blog/${article.slug}`}
                            className="group block h-full"
                        >
                            <div className="glass-panel rounded-lg overflow-hidden hover:border-brand-gold/50 transition-all duration-300 h-full flex flex-col">
                                <div className="aspect-[16/9] overflow-hidden flex-shrink-0">
                                    <img
                                        src={article.featuredImage}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs tracking-widest uppercase text-brand-gold font-bold">
                                        {category?.name}
                                    </span>
                                    <h3 className="text-lg font-serif font-bold text-brand-cream mt-2 group-hover:text-brand-gold transition-colors">
                                        {article.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

// Sidebar
const ArticleSidebar = ({ article }) => (
    <aside className="lg:sticky lg:top-8 space-y-8">
        {/* Author Card */}
        <div className="glass-panel p-6 rounded-lg text-center">
            <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-brand-gold/30"
            />
            <h3 className="font-serif font-bold text-brand-cream text-lg">
                {article.author.name}
            </h3>
            <p className="text-sm text-brand-cream/60 mt-1">
                {article.author.role}
            </p>
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

// Markdown-like content renderer
const renderContent = (content) => {
    // Convert markdown-style bold to JSX
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="text-brand-cream font-bold">{part.slice(2, -2)}</strong>;
        }
        // Handle bullet points
        if (part.includes('•')) {
            const lines = part.split('\n');
            return lines.map((line, lineIndex) => {
                if (line.trim().startsWith('•')) {
                    return (
                        <div key={`${index}-${lineIndex}`} className="flex items-start gap-3 my-2">
                            <span className="text-brand-gold mt-1">•</span>
                            <span>{line.trim().slice(1).trim()}</span>
                        </div>
                    );
                }
                return <span key={`${index}-${lineIndex}`}>{line}{lineIndex < lines.length - 1 ? '\n' : ''}</span>;
            });
        }
        return <span key={index}>{part}</span>;
    });
};

/* --- ARTICLE PAGE --- */
export default function Article() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = getArticleBySlug(slug);
    const relatedArticles = getRelatedArticles(slug, 2);

    useEffect(() => {
        if (article) {
            // Update Title
            const previousTitle = document.title;
            document.title = `${article.title} | Clínica Plena Saúde`;

            // Update Meta Description
            let metaDescription = document.querySelector('meta[name="description"]');
            const previousDescription = metaDescription ? metaDescription.getAttribute('content') : '';

            if (metaDescription) {
                metaDescription.setAttribute('content', article.metaDescription);
            } else {
                metaDescription = document.createElement('meta');
                metaDescription.name = "description";
                metaDescription.content = article.metaDescription;
                document.head.appendChild(metaDescription);
            }

            window.scrollTo(0, 0);

            // 1. Inject Canonical Link
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.rel = 'canonical';
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.href = `https://clinicaplenasaude.com/blog/${slug}`;

            // 2. Inject FAQ Schema
            let faqSchemaScript = document.getElementById('faq-schema');
            if (article.content.faq) {
                if (!faqSchemaScript) {
                    faqSchemaScript = document.createElement('script');
                    faqSchemaScript.id = 'faq-schema';
                    faqSchemaScript.type = 'application/ld+json';
                    document.head.appendChild(faqSchemaScript);
                }
                const faqData = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": article.content.faq.map(item => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer
                        }
                    }))
                };
                faqSchemaScript.text = JSON.stringify(faqData);
            }

            // 3. Inject Breadcrumb & Entity Service Schema
            let entitySchemaScript = document.getElementById('entity-schema');
            if (!entitySchemaScript) {
                entitySchemaScript = document.createElement('script');
                entitySchemaScript.id = 'entity-schema';
                entitySchemaScript.type = 'application/ld+json';
                document.head.appendChild(entitySchemaScript);
            }

            // Map articles to Knowledge Graph Entities
            const entities = {
                'por-que-sua-pele-nao-melhora': 'https://en.wikipedia.org/wiki/Skin_care',
                'botox-ou-bioestimulador': 'https://en.wikipedia.org/wiki/Botulinum_toxin',
                'metodo-mapa': 'https://en.wikipedia.org/wiki/Aesthetics',
                'acne-adulta': 'https://en.wikipedia.org/wiki/Acne'
            };

            const entityData = {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Clínica Plena Saúde",
                                "item": "https://clinicaplenasaude.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://clinicaplenasaude.com/blog"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": article.title,
                                "item": `https://clinicaplenasaude.com/blog/${slug}`
                            }
                        ]
                    },
                    {
                        "@type": "Service",
                        "serviceType": "Rejuvenescimento Integrativo",
                        "provider": { "@id": "https://clinicaplenasaude.com/#business" },
                        "areaServed": { "@type": "City", "name": "Guarujá" },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Método M.A.P.A.",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": article.title,
                                        "sameAs": entities[slug] || ""
                                    }
                                }
                            ]
                        }
                    }
                ]
            };
            entitySchemaScript.text = JSON.stringify(entityData);

            // Restore original metadata on unmount
            return () => {
                document.title = previousTitle;
                if (metaDescription) {
                    metaDescription.setAttribute('content', previousDescription);
                }
                if (faqSchemaScript) {
                    faqSchemaScript.text = ''; // Clear schema
                }
                if (entitySchemaScript) {
                    entitySchemaScript.text = '';
                }
            };
        }
    }, [slug, article]);

    if (!article) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-brand-cream mb-4">Artigo não encontrado</h1>
                    <Link to="/blog" className="text-brand-gold hover:underline">
                        Voltar ao Blog
                    </Link>
                </div>
            </div>
        );
    }

    const category = CATEGORIES[article.category];
    const formattedDate = new Date(article.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    // Generate FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": article.content.faq.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Generate Article Schema for SEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "author": {
            "@type": "Person",
            "name": article.author.name,
            "jobTitle": article.author.role
        },
        "publisher": {
            "@type": "Organization",
            "name": "Plena Saúde"
        },
        "datePublished": article.publishedAt,
        "image": article.featuredImage
    };

    return (
        <>
            {/* SEO Schema Scripts */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <div className="min-h-screen bg-brand-dark">
                {/* Header */}
                <header className="w-full py-8 px-6 border-b border-white/10">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <Link to="/blog" className="flex items-center gap-2 text-brand-cream/60 hover:text-brand-cream transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm tracking-widest uppercase">Blog</span>
                        </Link>
                        <Link to="/">
                            <img src="/logo-wide.png" alt="Plena Saúde" className="h-10 md:h-12 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                        </Link>
                        <div className="w-20" />
                    </div>
                </header>

                {/* Article Header */}
                <section className="w-full py-12 px-6 border-b border-white/5">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-brand-cream/50 mb-8">
                            <Link to="/" className="hover:text-brand-gold transition-colors flex items-center gap-1">
                                <Home className="w-3 h-3" />
                                Home
                            </Link>
                            <span>/</span>
                            <Link to="/blog" className="hover:text-brand-gold transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-brand-gold">{category?.name}</span>
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Category */}
                            <span className="inline-block text-xs tracking-[0.2em] uppercase text-brand-gold font-bold mb-4">
                                {category?.name}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-cream mb-6 leading-tight">
                                {article.title}
                            </h1>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-brand-cream/60 pb-8 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        className="w-8 h-8 rounded-full object-cover border border-brand-gold/30"
                                    />
                                    <span>Por <strong className="text-brand-cream">{article.author.name}</strong></span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-brand-gold" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-brand-gold" />
                                        {article.readingTime} min de leitura
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <main className="w-full max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Article Content */}
                        <article className="lg:col-span-2 prose-custom">
                            {/* Featured Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-10 rounded-lg overflow-hidden"
                            >
                                <img
                                    src={article.images.destaque}
                                    alt={article.title}
                                    className="w-full h-[280px] md:h-[350px] object-cover"
                                />
                            </motion.div>

                            {/* Intro */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-lg text-brand-cream/80 leading-relaxed mb-8 whitespace-pre-line"
                            >
                                {renderContent(article.content.intro)}
                            </motion.div>

                            {/* What You Will Learn */}
                            {article.content.whatYouWillLearn && (
                                <div className="glass-panel p-6 rounded-lg mb-10">
                                    <h3 className="text-lg font-serif font-bold text-brand-cream mb-4">
                                        Neste artigo, você vai entender:
                                    </h3>
                                    <ul className="space-y-2">
                                        {article.content.whatYouWillLearn.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-brand-cream/70">
                                                <span className="text-brand-gold">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Sections */}
                            {article.content.sections.map((section, index) => (
                                <motion.section
                                    key={section.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-12"
                                >
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-cream mb-6">
                                        {section.title}
                                    </h2>

                                    <div className="text-brand-cream/70 leading-relaxed whitespace-pre-line">
                                        {renderContent(section.content)}
                                    </div>

                                    {section.internalLink && (
                                        <InternalLink
                                            context={section.internalLink.context}
                                            text={section.internalLink.text}
                                            slug={section.internalLink.slug}
                                        />
                                    )}

                                    {section.quote && <QuoteBlock quote={section.quote} />}

                                    {section.imageAfter && article.images[section.imageAfter] && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            className="my-8 rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={article.images[section.imageAfter]}
                                                alt={section.title}
                                                className="w-full h-auto"
                                            />
                                        </motion.div>
                                    )}

                                    {section.ctaAfter && (
                                        <InlineCTA text={article.cta.text} url={article.cta.url} />
                                    )}

                                    {section.secondaryCtaAfter && article.secondaryCta && (
                                        <InlineCTA text={article.secondaryCta.text} url={article.secondaryCta.url} isSecondary={true} />
                                    )}
                                </motion.section>
                            ))}

                            {/* Conclusion */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-cream mb-6">
                                    {article.content.conclusion.title}
                                </h2>
                                <div className="text-brand-cream/70 leading-relaxed whitespace-pre-line">
                                    {renderContent(article.content.conclusion.content)}
                                </div>
                            </motion.section>

                            {/* FAQ */}
                            <FAQSection faqs={article.content.faq} />

                            {/* Final CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 md:p-10 rounded-lg border border-brand-gold/30 bg-gradient-to-b from-brand-gold/10 to-transparent text-center"
                            >
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-cream mb-4">
                                    Quer sair do ciclo de tentativas e frustrações?
                                </h3>
                                <p className="text-brand-cream/60 mb-6 max-w-lg mx-auto">
                                    Conheça o Programa Pele Plena e entenda o que sua pele realmente precisa.
                                </p>
                                <a
                                    href={article.cta.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden inline-flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-4 rounded-sm font-bold tracking-[0.2em] uppercase text-sm hover:bg-white transition-all duration-300"
                                >
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
                                    <span className="relative z-10 flex items-center gap-3">
                                        {article.cta.text}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                            </motion.div>

                            {/* Related Articles */}
                            <RelatedArticles articles={relatedArticles} />
                        </article>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <ArticleSidebar article={article} />
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="w-full py-8 px-6 border-t border-white/10 text-center">
                    <p className="text-xs tracking-widest uppercase text-brand-cream/40">
                        © {new Date().getFullYear()} Plena Saúde
                    </p>
                </footer>
            </div>
        </>
    );
}
