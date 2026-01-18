// Dados dos artigos do blog
export const AUTHOR = {
    name: "Dra. Vanderleia Prudêncio",
    role: "Enfermeira Integrativa Especialista em Estética",
    avatar: "/author-vanderleia.jpg",
};

export const CATEGORIES = {
    "pele-saude": {
        id: "pele-saude",
        name: "Pele & Saúde",
        color: "brand-gold",
    },
    "ciencia-longevidade": {
        id: "ciencia-longevidade",
        name: "Ciência & Longevidade",
        color: "brand-gold",
    },
    "procedimentos": {
        id: "procedimentos",
        name: "Procedimentos & Resultados",
        color: "brand-gold",
    },
};

export const ARTICLES = [
    {
        id: "por-que-sua-pele-nao-melhora",
        slug: "por-que-sua-pele-nao-melhora",
        title: "Por que sua pele não melhora? A verdade sobre tratamentos superficiais",
        subtitle: "Descubra por que cremes, lasers e peelings nem sempre funcionam",
        metaDescription: "Descubra por que cremes, lasers e peelings nem sempre funcionam. Entenda como a gestão contínua da pele traz resultados reais e duradouros.",
        category: "pele-saude",
        author: AUTHOR,
        publishedAt: "2026-01-18",
        readingTime: 8,
        featuredImage: "/blog/artigo-1-destaque.webp",
        images: {
            destaque: "/blog/artigo-1-destaque.webp",
            camadasPele: "/blog/artigo-1-camadas.webp",
            cultivo: "/blog/artigo-1-cultivo.webp",
            peleSaudavel: "/blog/artigo-1-pele-saudavel.webp",
        },
        cta: {
            text: "Conheça o Programa Pele Plena",
            url: "https://peleplena.clinicaplenasaude.com/",
        },
        content: {
            intro: `Você já investiu em cremes, lasers, peelings ou procedimentos estéticos e mesmo assim sente que sua pele nunca melhora de verdade?

Talvez até exista uma melhora inicial, mas ela não se sustenta ao longo do tempo.

Isso não acontece por falta de tecnologia ou de bons produtos. O problema está em algo que raramente é explicado ao paciente: **a maioria dos tratamentos atua apenas na superfície da pele.**`,

            whatYouWillLearn: [
                "Por que resultados \"bonitos\" nem sempre são resultados reais",
                "O erro mais comum nos tratamentos de pele",
                "O que muda quando a pele é tratada como um sistema vivo",
                "Como funciona uma estratégia contínua de cuidado, e não intervenções isoladas",
            ],

            sections: [
                {
                    id: "erro-comum",
                    title: "O erro mais comum: tratar a pele como um problema estético isolado",
                    content: `A pele não é apenas uma camada externa. Ela é um órgão ativo, conectado diretamente a hormônios, intestino, inflamação sistêmica, sono, alimentação, estresse e metabolismo.

Quando o tratamento se resume a:

• Um procedimento pontual
• Um produto considerado "milagroso"
• Uma sessão isolada

O que acontece é previsível: **o estímulo acontece, mas a causa permanece ativa.**

O resultado pode até aparecer por algumas semanas ou meses, mas não se mantém.`,
                    imageAfter: "camadasPele",
                },
                {
                    id: "tratamentos-superficiais",
                    title: "Por que tratamentos superficiais não resolvem, mesmo sendo bons",
                    content: `É importante deixar claro: **procedimentos estéticos não são o problema.**

O problema é utilizá-los sem estratégia, sem avaliação e sem continuidade.

**Alguns exemplos comuns:**

• Acne adulta que melhora após limpeza ou peeling, mas retorna
• Manchas que clareiam temporariamente e reaparecem
• Flacidez que melhora logo após o procedimento, mas regride
• Pele sensível, reativa ou opaca, apesar de muitos cuidados

**Isso acontece porque:**

• A inflamação de base não foi tratada
• O desequilíbrio hormonal não foi investigado
• A barreira cutânea está comprometida
• O estímulo celular não é sustentado ao longo do tempo

Em resumo: trata-se o efeito visível, mas não a origem do problema.`,
                    quote: "Trata-se o efeito visível, mas não a origem do problema.",
                },
                {
                    id: "gestao-pele",
                    title: "A pele responde à gestão, não a ações pontuais",
                    content: `A pele melhora de forma consistente quando existe:

• Avaliação correta
• Plano estruturado
• Acompanhamento contínuo
• Ajustes baseados na resposta individual

Assim como não se constrói saúde com um único treino ou uma única dieta, **não se constrói uma pele saudável com uma única sessão.**

O que realmente funciona é a **gestão da pele**, que envolve:

• Entender o momento biológico daquela pele
• Escolher estímulos adequados (nem excessivos, nem insuficientes)
• Respeitar o tempo de regeneração
• Acompanhar resultados e adaptar o plano`,
                    imageAfter: "cultivo",
                    internalLink: {
                        text: "Conheça o Método M.A.P.A.",
                        slug: "metodo-mapa",
                        context: "Entenda como funciona o diagnóstico profundo para identificar o que sua pele precisa:",
                    },
                    ctaAfter: true,
                },
                {
                    id: "pele-muda",
                    title: "Quando a pele finalmente começa a mudar",
                    content: `Os melhores resultados aparecem quando o cuidado deixa de ser apenas corretivo e passa a ser **estratégico.**

Isso significa:

• Menos agressões desnecessárias
• Estímulos mais inteligentes
• Equilíbrio entre estética e saúde
• Maior previsibilidade de resultados

**Os benefícios não são apenas visuais.** Pacientes costumam relatar:

• Pele mais estável
• Redução da sensibilidade
• Melhora do viço e da textura
• Envelhecimento mais lento e natural`,
                },
                {
                    id: "programa-pele-plena",
                    title: "O Programa Pele Plena: cuidado contínuo, não soluções rápidas",
                    content: `O Programa Pele Plena foi criado para corrigir uma falha comum no mercado: **tratamentos desconectados, sem acompanhamento real e sem visão de longo prazo.**

Ele é indicado para pessoas que:

• Já tentaram diversos tratamentos sem sucesso duradouro
• Desejam tratar acne, manchas, sensibilidade ou envelhecimento
• Buscam resultados naturais e sustentáveis
• Entendem que pele bonita é consequência de saúde

No programa, a pele é acompanhada ao longo do tempo, com:

• Avaliação individualizada
• Protocolos personalizados
• Ajustes conforme a resposta da pele
• Foco em longevidade cutânea`,
                    imageAfter: "peleSaudavel",
                },
            ],

            conclusion: {
                title: "Conclusão: sua pele não está \"difícil\", ela só não está sendo conduzida",
                content: `Na maioria dos casos, a pele não piora por falta de tratamento, mas por **excesso de estímulos inadequados e ausência de estratégia.**

Quando a causa é identificada e o cuidado se torna contínuo, a pele responde de forma consistente e previsível.`,
            },

            faq: [
                {
                    question: "Por que minha pele não melhora mesmo fazendo vários tratamentos?",
                    answer: "A maioria dos tratamentos atua apenas na superfície, sem tratar causas internas como inflamação, hormônios ou alimentação. Sem uma estratégia contínua, os resultados não se sustentam.",
                },
                {
                    question: "Procedimentos estéticos não funcionam?",
                    answer: "Funcionam, mas precisam fazer parte de um plano estruturado. Sem avaliação e acompanhamento, os resultados tendem a ser temporários.",
                },
                {
                    question: "O que é gestão da pele?",
                    answer: "É um processo contínuo de avaliação, tratamento e ajustes baseado na resposta individual da sua pele, considerando fatores internos e externos.",
                },
                {
                    question: "O Programa Pele Plena é indicado para quem?",
                    answer: "Para pessoas que já tentaram diversos tratamentos sem sucesso duradouro e buscam resultados naturais e sustentáveis através de acompanhamento contínuo.",
                },
                {
                    question: "Em quanto tempo vejo resultados?",
                    answer: "Resultados iniciais aparecem em semanas, mas a transformação real acontece ao longo de meses com acompanhamento consistente.",
                },
            ],
        },
    },
    {
        id: "botox-ou-bioestimulador",
        slug: "botox-ou-bioestimulador",
        title: "Botox ou Bioestimulador: qual escolher?",
        subtitle: "Guia completo para resultados naturais em 2026",
        metaDescription: "Descubra as diferenças entre botox e bioestimulador, quando usar cada um, e como escolher o tratamento ideal para resultados naturais e duradouros.",
        category: "procedimentos",
        author: AUTHOR,
        publishedAt: "2026-01-18",
        readingTime: 10,
        featuredImage: "/blog/artigo-2-destaque.png",
        images: {
            destaque: "/blog/artigo-2-destaque.png",
            comparacao: "/blog/artigo-2-comparacao.png",
        },
        cta: {
            text: "Ver Lista de Procedimentos",
            url: "https://procedimentos.clinicaplenasaude.com/",
        },
        content: {
            intro: `Botox ou bioestimulador?

Essa é uma das dúvidas mais comuns em consultório e também uma das mais mal compreendidas.

Muitas pessoas acreditam que esses procedimentos "competem" entre si, quando na verdade eles atuam de formas completamente diferentes e, em muitos casos, são complementares.`,

            whatYouWillLearn: [
                "O que realmente faz o botox",
                "Como funcionam os bioestimuladores de colágeno",
                "Para quem cada um é indicado",
                "Quando escolher um, outro ou a combinação dos dois",
                "Como evitar resultados artificiais",
            ],

            sections: [
                {
                    id: "nao-fazem-mesma-coisa",
                    title: "Botox e bioestimulador não fazem a mesma coisa",
                    content: `Apesar de ambos serem usados no rejuvenescimento facial, eles atuam em camadas e mecanismos distintos do envelhecimento.

Confundir essas funções é um dos principais motivos de frustração com resultados.`,
                    imageAfter: "comparacao",
                },
                {
                    id: "o-que-botox-faz",
                    title: "O que o botox faz, de fato",
                    content: `O botox (toxina botulínica) atua na contração muscular.

Ele é indicado principalmente para:

• Linhas de expressão dinâmicas (testa, glabela, pés de galinha)
• Prevenção de rugas profundas
• Suavização do aspecto cansado ou tenso do rosto

O botox não preenche, não estimula colágeno e não trata flacidez estrutural.

Seu efeito é temporário, geralmente entre 3 e 6 meses, e depende de técnica, dose e padrão muscular do paciente.

**Quando bem indicado, o resultado é:**
• Rosto mais descansado
• Expressão preservada
• Aparência natural

**Quando mal indicado ou mal aplicado, pode gerar:**
• Rigidez
• Perda de expressão
• Aspecto artificial`,
                },
                {
                    id: "o-que-bioestimuladores-fazem",
                    title: "O que os bioestimuladores de colágeno fazem",
                    content: `Os bioestimuladores atuam na qualidade da pele e na estrutura de sustentação.

Eles estimulam o próprio organismo a produzir colágeno novo ao longo do tempo.

**São indicados para:**
• Flacidez facial
• Perda de firmeza
• Afinamento da pele
• Envelhecimento estrutural

Diferente do botox, o bioestimulador não age imediatamente, não paralisa músculos e não muda a expressão.

Os resultados são progressivos e costumam aparecer ao longo de semanas ou meses, com efeito mais duradouro.`,
                    quote: "Bioestimuladores estimulam o próprio organismo a produzir colágeno novo.",
                },
                {
                    id: "como-escolher",
                    title: "Botox ou bioestimulador: como escolher?",
                    content: `A escolha correta depende de diagnóstico, não de idade ou tendência.

**Quando o botox é a melhor escolha:**
• Rugas aparecem principalmente ao movimentar o rosto
• Musculatura muito ativa
• Objetivo de prevenção
• Linhas localizadas

**Quando o bioestimulador é mais indicado:**
• Flacidez mesmo em repouso
• Perda de firmeza e sustentação
• Pele fina, opaca ou com pouca elasticidade
• Sinais de envelhecimento global`,
                    ctaAfter: true,
                },
                {
                    id: "combinacao",
                    title: "Quando a combinação é a melhor estratégia",
                    content: `Na maioria dos casos, o envelhecimento envolve movimento excessivo e perda de colágeno.

Nesses casos, combinar botox e bioestimulador permite:

• Tratar a causa muscular
• Estimular a estrutura da pele
• Manter naturalidade
• Obter resultados mais duradouros`,
                    internalLink: {
                        text: "Por que sua pele não melhora?",
                        slug: "por-que-sua-pele-nao-melhora",
                        context: "Saiba por que preparar a saúde da pele é essencial antes de qualquer procedimento:",
                    },
                },
                {
                    id: "resultados-naturais",
                    title: "Resultados naturais não dependem do produto, mas da condução",
                    content: `Um erro comum é escolher o procedimento antes da avaliação.

**Resultados naturais dependem de:**
• Entender o padrão de envelhecimento do rosto
• Respeitar proporções e individualidade
• Escolher doses e estímulos corretos
• Planejar o tratamento ao longo do tempo

O excesso, seja de botox ou de bioestimulador, é o principal fator de artificialização.`,
                    quote: "O excesso é o principal fator de artificialização.",
                },
                {
                    id: "procedimento-certo",
                    title: "Procedimento certo no momento certo",
                    content: `Não existe "melhor procedimento" de forma isolada. Existe o procedimento certo para o seu momento biológico e estético.

**Uma boa condução considera:**
• Idade biológica, não apenas cronológica
• Qualidade da pele
• Histórico de tratamentos
• Expectativa realista de resultado`,
                },
            ],

            conclusion: {
                title: "Quer saber qual procedimento é ideal para você?",
                content: `A decisão entre botox, bioestimulador ou combinação deve ser feita após uma avaliação criteriosa, e não baseada apenas em tendências ou indicações genéricas.

Na clínica, os procedimentos são indicados de forma personalizada, respeitando naturalidade, saúde da pele e longevidade dos resultados.`,
            },

            faq: [
                {
                    question: "Botox e bioestimulador são a mesma coisa?",
                    answer: "Não. O botox atua na contração muscular, enquanto o bioestimulador estimula a produção de colágeno. Eles têm funções completamente diferentes e podem ser complementares.",
                },
                {
                    question: "Qual dura mais: botox ou bioestimulador?",
                    answer: "O bioestimulador costuma ter efeito mais duradouro (1 a 2 anos), enquanto o botox dura de 3 a 6 meses. Porém, cada um trata problemas diferentes.",
                },
                {
                    question: "Posso fazer botox e bioestimulador juntos?",
                    answer: "Sim, na maioria dos casos a combinação é a melhor estratégia, pois trata tanto a causa muscular quanto a perda de colágeno.",
                },
                {
                    question: "Botox deixa o rosto artificial?",
                    answer: "Quando bem indicado e aplicado na dose correta, o botox deixa o rosto mais descansado com aparência natural. O aspecto artificial é resultado de excesso ou má aplicação.",
                },
                {
                    question: "Com qual idade devo começar a fazer botox?",
                    answer: "Não existe idade fixa. A indicação depende do padrão muscular e das linhas de expressão de cada pessoa, não apenas da idade cronológica.",
                },
            ],
        },
    },
    {
        id: "metodo-mapa",
        slug: "metodo-mapa",
        title: "O Método M.A.P.A.",
        subtitle: "Como identificamos a causa real do envelhecimento",
        metaDescription: "Descubra como o Método M.A.P.A. identifica a origem real do envelhecimento através de uma avaliação integrativa personalizada para resultados duradouros.",
        category: "ciencia-longevidade",
        author: AUTHOR,
        publishedAt: "2026-01-18",
        readingTime: 9,
        featuredImage: "/blog/artigo-3-destaque.png",
        images: {
            destaque: "/blog/artigo-3-destaque.png",
            avaliacao: "/blog/artigo-3-avaliacao.png",
        },
        cta: {
            text: "Agendar sua Avaliação M.A.P.A.",
            url: "https://mapa.clinicaplenasaude.com/",
        },
        content: {
            intro: `O envelhecimento não acontece de forma aleatória. Ele segue padrões biológicos claros, mas que raramente são avaliados de forma completa.

Grande parte dos tratamentos estéticos começa quando o problema já está visível, sem investigar por que aquela pele ou aquele rosto envelheceram daquela forma.

O Método M.A.P.A. foi criado para mudar essa lógica.`,

            whatYouWillLearn: [
                "Por que tratamentos sem diagnóstico falham",
                "O que é o Método M.A.P.A.",
                "O que avaliamos no protocolo",
                "Por que identificar a causa muda o resultado",
                "Para quem o método é indicado",
            ],

            sections: [
                {
                    id: "problema-tratamentos",
                    title: "O problema dos tratamentos sem diagnóstico profundo",
                    content: `Na prática clínica, é comum encontrar pessoas que:

• Já realizaram diversos procedimentos
• Tiveram melhora temporária
• Sentem que os resultados não evoluem
• Percebem envelhecimento desigual do rosto

Isso acontece porque o envelhecimento não se resume a rugas ou flacidez.

Ele é consequência de uma soma de fatores, como:

• Inflamação persistente
• Alterações hormonais
• Perda de qualidade celular
• Estresse oxidativo
• Hábitos de vida

Quando esses fatores não são avaliados, o tratamento se torna reativo e pouco sustentável.`,
                    imageAfter: "avaliacao",
                },
                {
                    id: "o-que-e-mapa",
                    title: "O que é o Método M.A.P.A.",
                    content: `O Método M.A.P.A. é um protocolo de avaliação integrativa que busca identificar a origem real do envelhecimento de cada paciente.

Antes de indicar qualquer procedimento, o método parte de uma pergunta essencial:

**O que está levando essa pessoa a envelhecer dessa forma neste momento?**

A partir dessa resposta, é possível construir um plano coerente, personalizado e seguro.`,
                    quote: "O que está levando essa pessoa a envelhecer dessa forma neste momento?",
                },
                {
                    id: "o-que-avaliamos",
                    title: "O que avaliamos no Método M.A.P.A.",
                    content: `Cada avaliação é individual, mas envolve pilares fundamentais.

**Mapeamento facial e estrutural**
Análise das proporções, assimetrias, perda de sustentação e padrões de envelhecimento do rosto.

**Avaliação da qualidade da pele**
Textura, espessura, elasticidade, viço, inflamação e capacidade de regeneração.

**Avaliação funcional e sistêmica**
Fatores internos que impactam diretamente a pele, como inflamação, metabolismo, histórico hormonal e estilo de vida.

**Análise do histórico de tratamentos**
Compreensão do que já foi realizado, dos resultados obtidos e das limitações encontradas.`,
                    ctaAfter: true,
                },
                {
                    id: "por-que-identificar-causa",
                    title: "Por que identificar a causa muda completamente o resultado",
                    content: `Quando a causa do envelhecimento é compreendida:

• Os procedimentos deixam de ser aleatórios
• O plano se torna mais previsível
• O risco de excessos diminui
• Os resultados ficam mais naturais
• A longevidade estética aumenta

O foco deixa de ser apenas corrigir sinais e passa a ser conduzir o envelhecimento com consciência.`,
                },
                {
                    id: "para-quem-indicado",
                    title: "Para quem o Método M.A.P.A. é indicado",
                    content: `O Método M.A.P.A. é indicado para pessoas que:

• Já realizaram procedimentos sem resultados duradouros
• Buscam naturalidade e equilíbrio
• Sentem que o envelhecimento acelerou
• Desejam um plano claro e individualizado
• Entendem que estética e saúde estão conectadas`,
                    internalLink: {
                        text: "Acne adulta: como tratar de forma definitiva",
                        slug: "acne-adulta",
                        context: "Veja um exemplo de como o M.A.P.A. resolve casos complexos como a acne:",
                    },
                },
                {
                    id: "envelhecer-bem",
                    title: "Envelhecer bem começa com entendimento",
                    content: `Tratar apenas os sinais visíveis não resolve quando a origem do problema não é considerada.

O Método M.A.P.A. existe para quem busca clareza, estratégia e resultados consistentes ao longo do tempo.

Antes de escolher qualquer procedimento, é fundamental entender o que está acontecendo com o seu corpo e com a sua pele.`,
                },
            ],

            conclusion: {
                title: "Agende sua Avaliação M.A.P.A.",
                content: `Se você sente que os tratamentos não evoluem ou que os resultados não se mantêm, a Avaliação M.A.P.A. é o primeiro passo para mudar essa trajetória.

Agende sua Avaliação M.A.P.A. e descubra a causa real do seu envelhecimento.`,
            },

            faq: [
                {
                    question: "O que significa M.A.P.A.?",
                    answer: "M.A.P.A. é um protocolo de Mapeamento e Avaliação Personalizada do envelhecimento, que identifica as causas reais antes de indicar qualquer procedimento.",
                },
                {
                    question: "Quanto tempo dura a avaliação?",
                    answer: "A avaliação é completa e individualizada, geralmente dura entre 40 minutos e 1 hora, dependendo do histórico e das necessidades de cada paciente.",
                },
                {
                    question: "Preciso fazer algum preparo antes?",
                    answer: "É recomendado comparecer sem maquiagem e, se possível, trazer exames recentes. Detalhes específicos são informados no agendamento.",
                },
                {
                    question: "A avaliação já inclui procedimentos?",
                    answer: "Não. A avaliação M.A.P.A. é focada em diagnóstico e planejamento. Os procedimentos são realizados em sessões posteriores, de acordo com o plano traçado.",
                },
                {
                    question: "Qual a diferença do M.A.P.A. para uma consulta comum?",
                    answer: "O M.A.P.A. vai além da análise estética superficial. Avaliamos fatores internos, histórico, estilo de vida e padrões de envelhecimento para criar um plano realmente personalizado.",
                },
            ],
        },
    },
    {
        id: "acne-adulta",
        slug: "acne-adulta",
        title: "Acne adulta",
        subtitle: "Por que ela aparece e como tratar de forma definitiva",
        metaDescription: "Entenda por que a acne adulta persiste e como tratar de forma definitiva através de uma abordagem integrativa que vai além dos tratamentos superficiais.",
        category: "pele-saude",
        author: AUTHOR,
        publishedAt: "2026-01-18",
        readingTime: 8,
        featuredImage: "/blog/artigo-4-destaque.png",
        images: {
            destaque: "/blog/artigo-4-destaque.png",
            tratamento: "/blog/artigo-4-tratamento.png",
        },
        cta: {
            text: "Iniciar Tratamento",
            url: "https://peleplena.clinicaplenasaude.com/",
        },
        secondaryCta: {
            text: "Agendar Avaliação M.A.P.A.",
            url: "https://mapa.clinicaplenasaude.com/",
        },
        relatedArticles: ["por-que-sua-pele-nao-melhora", "metodo-mapa"],
        content: {
            intro: `A acne não é um problema exclusivo da adolescência. Cada vez mais adultos convivem com espinhas persistentes, inflamação recorrente e marcas que parecem não responder a nenhum tratamento.

O mais frustrante é que, muitas vezes, a pessoa já tentou:

• Cosméticos específicos
• Antibióticos tópicos ou orais
• Peelings e limpezas frequentes

E mesmo assim, a acne retorna.

Isso acontece porque a acne adulta raramente é apenas um problema de pele.`,

            whatYouWillLearn: [
                "Por que a acne adulta surge",
                "Por que tratar só a espinha não resolve",
                "O que realmente funciona",
                "Quando buscar avaliação profunda",
                "Como iniciar o tratamento correto",
            ],

            sections: [
                {
                    id: "acne-nao-surge-por-acaso",
                    title: "Acne adulta não surge por acaso",
                    content: `Diferente da acne adolescente, a acne adulta costuma estar associada a fatores internos e sistêmicos.

Entre os mais comuns estão:

• Inflamação crônica
• Alterações hormonais
• Resistência à insulina
• Estresse persistente
• Disfunções intestinais
• Uso inadequado de estímulos agressivos na pele

Quando esses fatores não são investigados, o tratamento atua apenas no sintoma visível.

O resultado é melhora temporária, seguida de recidiva.`,
                },
                {
                    id: "por-que-tratar-espinha-nao-resolve",
                    title: "Por que tratar só a espinha não resolve",
                    content: `Focar apenas na lesão é um erro comum.

A espinha é a consequência final de um processo que começou muito antes, envolvendo:

• Aumento da inflamação
• Alteração da produção sebácea
• Desequilíbrio da microbiota da pele
• Falha da barreira cutânea

Sem corrigir esse cenário, qualquer abordagem se torna paliativa.`,
                    internalLink: {
                        text: "Por que sua pele não melhora?",
                        slug: "por-que-sua-pele-nao-melhora",
                        context: "Entenda mais sobre por que tratamentos superficiais não resolvem:",
                    },
                },
                {
                    id: "acne-exige-estrategia",
                    title: "Acne adulta exige estratégia, não repetição de protocolos",
                    content: `Um dos principais motivos da frustração com acne adulta é a repetição de protocolos padronizados.

Nem toda acne adulta deve ser tratada com:

• Peelings frequentes
• Ácidos em excesso
• Procedimentos agressivos

Em muitos casos, isso piora:

• A inflamação
• A sensibilidade
• O risco de manchas
• A instabilidade da pele

O que funciona é gestão contínua e personalizada da pele, respeitando o momento biológico de cada paciente.`,
                    imageAfter: "tratamento",
                },
                {
                    id: "avaliacao-da-causa",
                    title: "Quando a avaliação da causa muda tudo",
                    content: `Para que a acne seja tratada de forma definitiva, é necessário entender:

• Por que ela surgiu nessa fase da vida
• Quais fatores internos estão ativos
• Como a pele está respondendo aos estímulos
• Quais hábitos estão mantendo o quadro

É aqui que a avaliação integrativa faz diferença.

Ao identificar a origem do problema, o tratamento deixa de ser tentativa e passa a ser condução.`,
                    internalLink: {
                        text: "Conheça o Método M.A.P.A.",
                        slug: "metodo-mapa",
                        context: "Saiba como identificamos a causa real do envelhecimento e dos problemas de pele:",
                    },
                },
                {
                    id: "gestao-continua",
                    title: "O papel da gestão contínua da pele na acne adulta",
                    content: `A acne adulta melhora quando a pele é acompanhada ao longo do tempo.

Isso envolve:

• Estabilizar a inflamação
• Fortalecer a barreira cutânea
• Escolher estímulos adequados
• Ajustar o plano conforme a resposta da pele

Esse tipo de condução reduz:

• Crises recorrentes
• Marcas residuais
• Hiperpigmentação
• Dependência de tratamentos agressivos`,
                    ctaAfter: true,
                },
                {
                    id: "quando-avaliacao-profunda",
                    title: "Quando a acne pede uma avaliação mais profunda",
                    content: `Em alguns casos, a acne é apenas um sinal externo de um desequilíbrio maior.

Quando há:

• Acne persistente mesmo com cuidados
• Piora em períodos específicos
• Associação com outros sintomas
• Histórico de tratamentos sem sucesso

É fundamental investigar a causa de forma mais ampla.`,
                    secondaryCtaAfter: true,
                },
                {
                    id: "acne-deve-ser-compreendida",
                    title: "Acne adulta não deve ser combatida, deve ser compreendida",
                    content: `Tratar acne adulta não é apenas secar espinhas.

É entender o que o corpo está expressando através da pele e agir de forma estratégica, respeitando saúde, tempo e individualidade.

Quando a causa é abordada, a pele responde de forma mais previsível e sustentável.`,
                },
            ],

            conclusion: {
                title: "Inicie seu tratamento de forma consciente",
                content: `Se você convive com acne adulta e sente que os tratamentos não resolvem por completo, o primeiro passo é mudar a abordagem.

Você pode iniciar com:

• **Gestão contínua da pele**, focada em estabilidade e recuperação
• Ou uma **avaliação profunda da causa**, quando o quadro é persistente ou recorrente

Inicie seu tratamento e descubra o que sua pele realmente precisa.
Agende sua Avaliação M.A.P.A. e entenda a origem da sua acne.`,
            },

            faq: [
                {
                    question: "Acne adulta tem cura?",
                    answer: "A acne adulta pode ser controlada de forma definitiva quando a causa é identificada e tratada. O foco não é apenas eliminar espinhas, mas estabilizar a pele a longo prazo.",
                },
                {
                    question: "Por que minha acne volta sempre?",
                    answer: "Geralmente porque o tratamento foca apenas nas lesões visíveis, sem abordar os fatores internos como inflamação, hormônios e estilo de vida que mantêm o quadro ativo.",
                },
                {
                    question: "Qual a diferença entre acne adolescente e adulta?",
                    answer: "A acne adolescente está mais ligada às mudanças hormonais da puberdade. Já a acne adulta costuma ter causas mais complexas, como estresse, inflamação crônica e desequilíbrios metabólicos.",
                },
                {
                    question: "Peelings e limpezas resolvem a acne adulta?",
                    answer: "Em alguns casos ajudam, mas quando usados em excesso ou sem estratégia, podem piorar a inflamação e sensibilidade. O importante é ter um plano personalizado.",
                },
                {
                    question: "Como saber se preciso de uma avaliação mais profunda?",
                    answer: "Se você já tentou diversos tratamentos sem sucesso duradouro, se a acne piora em ciclos ou está associada a outros sintomas, uma avaliação integrativa pode revelar a causa real.",
                },
            ],
        },
    },
];

export const getArticleBySlug = (slug) => {
    return ARTICLES.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (categoryId) => {
    return ARTICLES.filter((article) => article.category === categoryId);
};

export const getRelatedArticles = (currentSlug, limit = 2) => {
    return ARTICLES.filter((article) => article.slug !== currentSlug).slice(0, limit);
};
