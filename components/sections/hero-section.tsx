import { ArrowRight, ChevronRight, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-[var(--lcnv-cream)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 pb-20 pt-20 md:grid-cols-2 md:gap-20">

        {/* ── Coluna esquerda ── */}
        <div className="animate-fade-up">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[var(--lcnv-teal)]" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--lcnv-teal)]">
              Contabilidade Estratégica
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-6 text-[clamp(2.8rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-[var(--lcnv-deep)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Sua empresa<br />
            em ordem,<br />
            seus{' '}
            <em className="not-italic text-[var(--lcnv-teal)]">lucros</em>
            <br />
            em foco.
          </h1>

          {/* Descrição */}
          <p className="mb-10 max-w-[420px] text-base leading-[1.8] text-[var(--lcnv-teal-light)] md:text-[var(--lcnv-teal)]">
            Do MEI às empresas de médio porte — contabilidade completa com
            tecnologia integrada, atendimento personalizado e expertise que
            transforma números em decisões.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded bg-[var(--lcnv-deep)] px-7 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--lcnv-deep-mid)]"
            >
              Começar Agora
              <ArrowRight size={15} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border-b border-[var(--lcnv-teal)] pb-0.5 text-sm font-medium text-[var(--lcnv-teal)] transition-all hover:gap-3"
            >
              Ver Serviços
              <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* ── Coluna direita — card de stats ── */}
        <div className="relative mt-6 md:mt-0">
          {/* Badge CRC */}
          <span className="absolute -top-3 right-0 z-10 rounded bg-[var(--lcnv-teal)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white">
            CRC Ativo
          </span>

          {/* Card principal */}
          <div className="relative overflow-hidden rounded-xl bg-[var(--lcnv-deep)] p-8 text-white">
            {/* Círculo decorativo */}
            <span className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--lcnv-teal)]/10" />

            <p className="mb-1 text-[0.65rem] uppercase tracking-[0.14em] text-white/40">
              Resultados para nossos clientes
            </p>
            <p
              className="mb-8 text-xl font-bold leading-snug"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Contabilidade que<br />impulsiona negócios.
            </p>

            {/* Grid de métricas */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[2.2rem] font-bold leading-none text-[var(--lcnv-teal-pale)]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {s.value}
                    {s.suffix && (
                      <span className="text-lg">{s.suffix}</span>
                    )}
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.06em] text-white/40">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Badge de certificação */}
          <div className="absolute -bottom-10 left-6 flex items-center gap-3 rounded-lg border border-[var(--lcnv-teal-pale)] bg-white px-4 py-3 shadow-sm">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded bg-[var(--lcnv-teal-xpale)]">
              <Star size={16} className="text-[var(--lcnv-teal)]" />
            </span>
            <div>
              <p className="text-[0.82rem] font-semibold text-[var(--lcnv-deep)]">
                Empresa certificada
              </p>
              <p className="text-[0.7rem] text-[var(--lcnv-teal)]">
                Conselho Regional de Contabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── dados das métricas — edite aqui conforme necessário ── */
const stats = [
  { value: '+15', suffix: 'anos', label: 'de experiência'      },
  { value: '500', suffix: '+',    label: 'empresas atendidas'  },
  { value: '98',  suffix: '%',    label: 'satisfação'          },
  { value: '0',   suffix: null,   label: 'infrações fiscais'   },
]
