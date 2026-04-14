"use client";

import Link from "next/link";
import { Calculator, MapPin, Mail, Phone } from "lucide-react";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";

const footerLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/diferenciais", label: "Diferenciais" },
  { href: "/contato", label: "Contato" },
];


const socialLinks = [
  {
    id:1,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  {
    id:2,
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "#",
    icon: <FacebookIcon />,
    label: "Facebook",
  },
  {
    id:3,
    href: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "#",
    icon: <WhatsappIcon />,
    label: "WhatsApp",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Calculator className="h-8 w-8 text-primary-foreground" />
              <span className="text-xl font-bold">Contábil Pro</span>
            </Link>
            <p className="text-background/70 max-w-md leading-relaxed">
              Soluções contábeis completas para sua empresa crescer com
              segurança. Mais de 15 anos de experiência no mercado.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((e) => (
                <Link
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:scale-110 transition-transform"
                  key={e.id}
                >
                  {e.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/50 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Rua São João Clímaco, n° 656 - sala 04
                  <br />
                  São Paulo - SP, 04255-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-background/50 flex-shrink-0" />
                <a
                  href="mailto:contato@contabilpro.com.br"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  contato@contabilpro.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-background/50 flex-shrink-0" />
                <a
                  href="tel:+5511916271334"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  (11) 91627-1334
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            &copy; {currentYear} LCNV Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
