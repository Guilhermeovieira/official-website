import {
  Shield,
  FileText,
  Star,
  Users,
  Clock,
  Package,
} from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import { servicesSection } from '@/lib/companyInfo'
import type { Service } from '@/types'


export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20">

        {/* Cabeçalho */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[1.5px] w-5 bg-[var(--lcnv-teal)]" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--lcnv-teal)]">
              Serviços
            </span>
          </div>
          <h2
            className="text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold leading-[1.15] tracking-tight text-[var(--lcnv-deep)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Soluções completas para<br />cada etapa do seu negócio
          </h2>
          <p className="mt-3 max-w-[500px] text-[0.95rem] leading-[1.75] text-[var(--lcnv-teal)]">
            Desde a abertura até o planejamento tributário avançado — cuidamos
            de tudo para você focar no que importa.
          </p>
        </div>

        {/* Grid de serviços */}
        <div
          className="grid grid-cols-1 gap-px bg-[var(--lcnv-teal-pale)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesSection.map((service) => (
            <ServiceCard key={service.num} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ num, icon: Icon, title, description }: Service) {
  return (
    <article className="group relative bg-white p-8 transition-colors hover:bg-[var(--lcnv-teal-xpale)]">
      {/* Número decorativo */}
      <p
        className="mb-3 text-[3.5rem] font-black leading-none text-[var(--lcnv-teal-pale)] transition-colors group-hover:text-[var(--lcnv-teal-light)]"
        style={{ fontFamily: 'var(--font-playfair)' }}
        aria-hidden="true"
      >
        {num}
      </p>

      {/* Ícone */}
      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-[var(--lcnv-deep)]">
        <Icon size={19} className="text-white" strokeWidth={1.8} />
      </span>

      {/* Texto */}
      <h3
        className="mb-2 text-[1.05rem] font-bold text-[var(--lcnv-deep)]"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        {title}
      </h3>
      <p className="text-[0.84rem] leading-[1.7] text-[var(--lcnv-teal)]">
        {description}
      </p>
    </article>
  )
}
