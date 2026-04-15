'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

/* ── Schema de validação ── */
const schema = z.object({
  name:    z.string().min(2,  'Informe seu nome completo'),
  company: z.string().min(1,  'Informe o nome da empresa'),
  email:   z.string().email(  'E-mail inválido'),
  phone:   z.string().min(10, 'Telefone inválido'),
  service: z.string().min(1,  'Selecione um serviço'),
  message: z.string().min(10, 'Mensagem muito curta'),
})

type FormData = z.infer<typeof schema>

const services = [
  'Abertura de Empresa',
  'Contabilidade Mensal',
  'Planejamento Tributário',
  'Folha de Pagamento',
  'Obrigações Acessórias',
  'Consultoria Empresarial',
]

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '(11) 99999-0000',
    href: 'https://wa.me/5511999990000',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@lcnv.com.br',
    href: 'mailto:contato@lcnv.com.br',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, SP · Atendimento remoto em todo o Brasil',
    href: null,
  },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  /*
   * onSubmit — substitua pelo seu endpoint real (ex: API Route, Resend, Formspree)
   * Por ora simula um envio de 1.5s e exibe mensagem de sucesso
   */
  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contato" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20">

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── Informações de contato ── */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[var(--lcnv-teal)]" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--lcnv-teal)]">
                Contato
              </span>
            </div>
            <h2
              className="mb-4 text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold leading-[1.15] tracking-tight text-[var(--lcnv-deep)]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Fale com um<br />contador agora
            </h2>
            <p className="mb-10 text-[0.95rem] leading-[1.75] text-[var(--lcnv-teal)]">
              Tire suas dúvidas, solicite um diagnóstico gratuito ou descubra
              como podemos ajudar sua empresa a crescer com segurança.
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[var(--lcnv-teal-xpale)]">
                    <item.icon size={18} className="text-[var(--lcnv-teal)]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[var(--lcnv-teal)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[0.92rem] font-medium text-[var(--lcnv-deep)] hover:text-[var(--lcnv-teal)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[0.92rem] font-medium text-[var(--lcnv-deep)]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Box de resposta rápida */}
            <div className="mt-8 rounded-lg border border-[var(--lcnv-teal-pale)] bg-[var(--lcnv-teal-xpale)] px-5 py-4">
              <p className="mb-1 text-[0.88rem] font-semibold text-[var(--lcnv-deep)]">
                Resposta rápida
              </p>
              <p className="text-[0.8rem] leading-[1.6] text-[var(--lcnv-teal)]">
                Nosso time responde em até 2 horas no horário comercial.
                Urgências via WhatsApp.
              </p>
            </div>
          </div>

          {/* ── Card de formulário ── */}
          <div className="rounded-xl border border-[var(--lcnv-teal-pale)] bg-white p-8 shadow-sm">
            {submitted ? (
              /* Feedback de sucesso */
              <div className="flex flex-col items-center py-12 text-center">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--lcnv-teal-xpale)]">
                  <Mail size={24} className="text-[var(--lcnv-teal)]" />
                </span>
                <h3
                  className="mb-2 text-xl font-bold text-[var(--lcnv-deep)]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Mensagem enviada!
                </h3>
                <p className="mb-6 text-sm text-[var(--lcnv-teal)]">
                  Retornaremos em breve. Obrigado pelo contato.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium text-[var(--lcnv-teal)] underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="mb-1 text-[1.1rem] font-bold text-[var(--lcnv-deep)]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Envie sua mensagem
                </h3>
                <p className="mb-6 text-[0.8rem] text-[var(--lcnv-teal)]">
                  Preencha o formulário e retornaremos em breve.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Nome + Empresa */}
                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Nome" error={errors.name?.message}>
                      <input
                        {...register('name')}
                        placeholder="Seu nome completo"
                        className={inputCls(!!errors.name)}
                      />
                    </Field>
                    <Field label="Empresa" error={errors.company?.message}>
                      <input
                        {...register('company')}
                        placeholder="Nome da empresa"
                        className={inputCls(!!errors.company)}
                      />
                    </Field>
                  </div>

                  {/* E-mail + Telefone */}
                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="E-mail" error={errors.email?.message}>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="seu@email.com"
                        className={inputCls(!!errors.email)}
                      />
                    </Field>
                    <Field label="Telefone" error={errors.phone?.message}>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="(11) 9 0000-0000"
                        className={inputCls(!!errors.phone)}
                      />
                    </Field>
                  </div>

                  {/* Serviço */}
                  <Field
                    label="Serviço de interesse"
                    error={errors.service?.message}
                    className="mb-4"
                  >
                    <select
                      {...register('service')}
                      className={inputCls(!!errors.service)}
                    >
                      <option value="">Selecione um serviço...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  {/* Mensagem */}
                  <Field
                    label="Mensagem"
                    error={errors.message?.message}
                    className="mb-6"
                  >
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Conte-nos um pouco sobre seu negócio e como podemos ajudar..."
                      className={inputCls(!!errors.message)}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded bg-[var(--lcnv-deep)] py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--lcnv-deep-mid)] disabled:opacity-60"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── helpers ── */

function inputCls(hasError: boolean) {
  return [
    'w-full rounded border px-3 py-2.5 text-[0.88rem] outline-none transition-colors',
    'bg-[var(--lcnv-cream)] text-[var(--lcnv-deep)] placeholder:text-[var(--lcnv-teal-pale)]',
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-[var(--lcnv-teal-pale)] focus:border-[var(--lcnv-teal)]',
  ].join(' ')
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.06em] text-[var(--lcnv-deep)]">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[0.72rem] text-red-500">{error}</p>
      )}
    </div>
  )
}