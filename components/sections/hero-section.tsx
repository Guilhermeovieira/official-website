"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsappIcon from "../icons/WhatsappIcon";

// const WHATSAPP_MESSAGE = encodeURIComponent(
//   "Olá, tenho interesse nos serviços de contabilidade.",
// );

export function HeroSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_URL || "";

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Mais de 500 empresas atendidas
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            Simplifique sua <span className="text-primary">contabilidade</span>{" "}
            e foque no crescimento
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Oferecemos soluções contábeis completas para sua empresa crescer com
            segurança. Atendimento personalizado, tecnologia moderna e
            especialistas certificados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/contato">
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-primary/20 hover:bg-primary"
            >
              <Link
                href={whatsappNumber}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Clientes ativos" },
            { value: "15+", label: "Anos de experiência" },
            { value: "98%", label: "Satisfação" },
            { value: "24h", label: "Suporte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
