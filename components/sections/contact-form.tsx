"use client"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório"
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus("loading")
    
    // Simula envio de e-mail
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simula sucesso (90% de chance) ou erro (10% de chance)
    if (Math.random() > 0.1) {
      setStatus("success")
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
    } else {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === "success") {
    return (
      <section id="contato" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-lg mx-auto text-center">
            <CardContent className="pt-12 pb-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Mensagem Enviada!</h3>
              <p className="text-muted-foreground mb-6">
                Obrigado pelo contato. Retornaremos em breve.
              </p>
              <Button onClick={() => setStatus("idle")}>
                Enviar Nova Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você
          </p>
        </div>
        
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Solicite um Orçamento</CardTitle>
            <CardDescription>
              Responderemos sua mensagem em até 24 horas úteis
            </CardDescription>
          </CardHeader>
          <CardContent>
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 mb-6 rounded-lg bg-destructive/10 text-destructive">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">Ocorreu um erro. Tente novamente.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-1.5">
                  Nome completo
                </label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                />
                {errors.nome && (
                  <p id="nome-error" className="text-sm text-destructive mt-1">{errors.nome}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-1.5">
                  Telefone
                </label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                  aria-invalid={!!errors.telefone}
                  aria-describedby={errors.telefone ? "telefone-error" : undefined}
                />
                {errors.telefone && (
                  <p id="telefone-error" className="text-sm text-destructive mt-1">{errors.telefone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-1.5">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                />
                {errors.mensagem && (
                  <p id="mensagem-error" className="text-sm text-destructive mt-1">{errors.mensagem}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
