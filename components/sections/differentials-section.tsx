"use client"

import { Users, Award, Headphones, Laptop } from "lucide-react"

const differentials = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Oferecemos um atendimento dedicado e sob medida para suas necessidades específicas."
  },
  {
    icon: Award,
    title: "Especialistas Certificados",
    description: "Nossa equipe é formada por contadores e consultores com certificações reconhecidas no mercado."
  },
  {
    icon: Headphones,
    title: "Suporte Rápido",
    description: "Respondemos suas dúvidas em até 24 horas. Você nunca fica sem suporte quando precisa."
  },
  {
    icon: Laptop,
    title: "Tecnologia Integrada",
    description: "Utilizamos as melhores ferramentas digitais para otimizar processos e facilitar sua gestão."
  }
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher a{" "}
              <span className="text-primary">Contábil Pro</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Combinamos experiência, tecnologia e atendimento humanizado para oferecer 
              o melhor serviço contábil para sua empresa.
            </p>
            
            <div className="space-y-6">
              {differentials.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 lg:p-12">
              <div className="w-full h-full rounded-xl bg-card border border-border shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-muted-foreground">Anos de Excelência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
