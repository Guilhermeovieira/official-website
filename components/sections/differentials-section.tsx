import { ArrowRight, Check } from 'lucide-react'

interface Differential {
  title: string
  description: string
}

const differentials: Differential[] = [
  {
    title: 'Tecnologia integrada ao seu negócio',
    description:
      'Portal exclusivo com relatórios em tempo real, emissão de notas fiscais, envio de documentos e comunicação direta com seu contador — tudo em um só lugar, 24 horas por dia.',
  },
  {
    title: 'Contador dedicado e atendimento personalizado',
    description:
      'Cada cliente tem um contador responsável que conhece profundamente o seu negócio. Sem filas, sem chatbots — comunicação direta e eficiente quando você precisar.',
  },
  {
    title: 'Economia tributária comprovada',
    description:
      'Nossos clientes economizam em média 18% em impostos com nosso planejamento tributário estratégico. Analisamos seu negócio e encontramos o regime mais vantajoso legalmente.',
  },
  {
    title: 'Segurança e compliance total',
    description:
      'Zero autuações fiscais em nossa carteira. Mantemos você sempre em conformidade com todas as obrigações tributárias, trabalhistas e contábeis — sem surpresas.',
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-[var(--lcnv-cream)]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">

        {/*
         * Layout assimétrico: coluna esquerda sticky (2fr) + lista à direita (3fr)
         * O sticky funciona porque o pai tem overflow visible e altura definida
         * pelo conteúdo da coluna direita
         */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[2fr_3fr] lg:gap-20">

          {/* ── Coluna esquerda — sticky ── */}
          <div className="lg:sticky lg:top-[100px]">
            {/* Número decorativo gigante */}
            <p
              className="-mb-2 text-[6rem] font-black leading-none text-[var(--lcnv-teal-pale)] lg:text-[8rem]"
              style={{ fontFamily: 'var(--font-playfair)' }}
              aria-hidden="true"
            >
              04
            </p>

            <div className="mb-3 flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[var(--lcnv-teal)]" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--lcnv-teal)]">
                Diferenciais
              </span>
            </div>

            <h2
              className="mb-3 text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold leading-[1.15] tracking-tight text-[var(--lcnv-deep)]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Por que a LCNV<br />é diferente
            </h2>

            <p className="mb-8 text-[0.95rem] leading-[1.75] text-[var(--lcnv-teal)]">
              Não somos apenas contadores. Somos parceiros estratégicos
              comprometidos com o crescimento do seu negócio.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded bg-[var(--lcnv-deep)] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--lcnv-deep-mid)]"
            >
              Falar com Especialista
              <ArrowRight size={14} />
            </a>
          </div>

          {/* ── Coluna direita — lista de diferenciais ── */}
          <div>
            {differentials.map((item, index) => (
              <DifferentialItem
                key={index}
                title={item.title}
                description={item.description}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DifferentialItem({
  title,
  description,
  isFirst,
}: Differential & { isFirst: boolean }) {
  return (
    <div
      className={`grid grid-cols-[26px_1fr] items-start gap-4 border-b border-[var(--lcnv-teal-pale)] py-7 ${
        isFirst ? 'border-t' : ''
      }`}
    >
      {/* Check circle */}
      <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-[var(--lcnv-deep)]">
        <Check size={11} className="text-white" strokeWidth={2.5} />
      </span>

      <div>
        <h3 className="mb-1.5 text-[0.95rem] font-semibold text-[var(--lcnv-deep)]">
          {title}
        </h3>
        <p className="text-[0.84rem] leading-[1.65] text-[var(--lcnv-teal)]">
          {description}
        </p>
      </div>
    </div>
  )
}
