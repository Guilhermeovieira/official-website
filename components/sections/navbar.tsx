"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link"
import { Menu, X } from "lucide-react"


const navLinks = [
  { label: 'Serviços',       href: '#servicos'      },
  { label: 'Diferenciais',   href: '#diferenciais'  },
  { label: 'Como Funciona',  href: '#como-funciona' },
  { label: 'Contato',        href: '#contato'       },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
 
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--lcnv-teal-pale)] bg-[var(--lcnv-cream)]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-6">
 
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="LCNV Contabilidade"
            width={40}
            height={40}
            className="rounded-md object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-[1.15rem] font-bold tracking-tight text-[var(--lcnv-deep)]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              LCNV
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[var(--lcnv-teal)]">
              Contabilidade
            </span>
          </div>
        </Link>
 
        {/* ── Desktop links ── */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--lcnv-teal)] transition-colors hover:text-[var(--lcnv-deep)]"
            >
              {link.label}
            </a>
          ))}
 
          <a
            href="#contato"
            className="rounded bg-[var(--lcnv-deep)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--lcnv-deep-mid)]"
          >
            Falar com Especialista
          </a>
        </nav>
 
        {/* ── Mobile hamburger button ── */}
        <button
          className="flex items-center justify-center rounded p-1 text-[var(--lcnv-deep)] md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
 
      {/* ── Mobile menu — desliza quando aberto ── */}
      {mobileOpen && (
        <div className="border-t border-[var(--lcnv-teal-pale)] bg-[var(--lcnv-cream)] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[var(--lcnv-teal)] transition-colors hover:text-[var(--lcnv-deep)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-2 rounded bg-[var(--lcnv-deep)] px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Falar com Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
 




