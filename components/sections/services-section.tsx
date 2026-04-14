"use client"

import { Building2, FileText, Calculator, TrendingUp } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Abertura de Empresa",
    description: "Cuidamos de toda a burocracia para você abrir sua empresa com rapidez e segurança. CNPJ, alvará e registros."
  },
  {
    icon: FileText,
    title: "Contabilidade Mensal",
    description: "Gestão contábil completa com relatórios mensais, balanços e demonstrações financeiras sempre em dia."
  },
  {
    icon: Calculator,
    title: "Consultoria Fiscal",
    description: "Orientação especializada para manter sua empresa em conformidade com a legislação tributária vigente."
  },
  {
    icon: TrendingUp,
    title: "Planejamento Tributário",
    description: "Estratégias inteligentes para reduzir sua carga tributária de forma legal e aumentar sua lucratividade."
  }
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções contábeis completas para cada fase do seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
