import { ArrowRight } from 'lucide-react'

interface Step {
  num: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    description:
      'Conversamos sobre seu negócio, entendemos suas necessidades e identificamos oportunidades de economia fiscal.',
  },
  {
    num: '02',
    title: 'Proposta personalizada',
    description:
      'Apresentamos um plano sob medida com serviços, prazos e investimento claro. Sem letras miúdas.',
  },
  {
    num: '03',
    title: 'Migração e onboarding',
    description:
      'Nossa equipe cuida de toda a transição, transferência de documentos e configuração do portal digital.',
  },
  {
    num: '04',
    title: 'Operação contínua',
    description:
      'Sua contabilidade rodando com relatórios mensais, entregas no prazo e suporte sempre disponível.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-[var(--lcnv-deep)]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">

        {/* Cabeçalho */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[1.5px] w-5 bg-[var(--lcnv-teal-light)]" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--lcnv-teal-light)]">
              Como Funciona
            </span>
          </div>
          <h2
            className="text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Da contratação ao resultado<br />em 4 passos simples
          </h2>
          <p className="mt-3 max-w-[480px] text-[0.95rem] leading-[1.75] text-[var(--lcnv-teal-light)]/70">
            Processo descomplicado, transparente e rápido. Começamos a cuidar
            da sua empresa em menos de uma semana.
          </p>
        </div>

        {/* Grid de passos */}
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-lg border border-white/10 px-7 py-6">
          <div>
            <p
              className="text-xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Pronto para começar?
            </p>
            <p className="mt-1 text-[0.84rem] text-[var(--lcnv-teal-light)]/55">
              Diagnóstico gratuito e sem compromisso.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded bg-[var(--lcnv-teal)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--lcnv-teal-light)]"
          >
            Agendar Diagnóstico Gratuito
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

function StepCard({ num, title, description }: Step) {
  return (
    <div className="bg-[var(--lcnv-deep)] px-7 py-9">
      {/* Ponto teal */}
      <span className="mb-3 block h-2 w-2 rounded-full bg-[var(--lcnv-teal)]" />

      {/* Número decorativo */}
      <p
        className="mb-3 text-[3.5rem] font-black leading-none text-white/[0.06]"
        style={{ fontFamily: 'var(--font-playfair)' }}
        aria-hidden="true"
      >
        {num}
      </p>

      <h3 className="mb-2 text-[0.95rem] font-semibold text-white">
        {title}
      </h3>
      <p className="text-[0.83rem] leading-[1.65] text-[var(--lcnv-teal-light)]/60">
        {description}
      </p>
    </div>
  )
}
