import Image from 'next/image'

const footerLinks = {
  Serviços: [
    'Abertura de Empresa',
    'Contabilidade Mensal',
    'Planejamento Tributário',
    'Folha de Pagamento',
    'Consultoria',
  ],
  Empresa: [
    'Sobre Nós',
    'Nossa Equipe',
    'Blog Contábil',
    'Casos de Sucesso',
    'Carreiras',
  ],
  Contato: [
    '(11) 99999-0000',
    'contato@lcnv.com.br',
    'São Paulo, SP',
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--lcnv-deep)] text-white/55">
      <div className="mx-auto max-w-[1200px] px-6 pb-8 pt-14">

        {/* Topo: logo + colunas */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/8 pb-10 md:grid-cols-4">

          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="LCNV"
                width={34}
                height={34}
                className="rounded bg-white/10 object-contain p-0.5"
              />
              <span
                className="text-[1.05rem] font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                LCNV Contabilidade
              </span>
            </div>
            <p className="max-w-[220px] text-[0.82rem] leading-[1.65]">
              Seu parceiro estratégico em contabilidade. Tecnologia, expertise e
              atendimento personalizado para empresas que querem crescer.
            </p>
          </div>

          {/* Colunas de links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-[var(--lcnv-teal-light)]">
                {title}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.82rem] text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[0.75rem]">
          <span>© {new Date().getFullYear()} LCNV Contabilidade. Todos os direitos reservados.</span>
          <div className="flex gap-5">
            {['Política de Privacidade', 'Termos de Uso', 'CRC-SP'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/35 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}