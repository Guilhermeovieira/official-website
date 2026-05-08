import {
  Phone,
  Mail,
  MapPin,
  Shield,
  FileText,
  Star,
  Users,
  Clock,
  Package,
} from "lucide-react";
import type { Step, Differential, Service } from "@/types";

export const WA_NUMBER = "5511916271334";
export const WA_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os serviços de contabilidade.",
);

export const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 91627-1334",
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@lcnv.com.br",
    href: "mailto:contato@lcnv.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value:
      "R. São João Clímaco, 656A, São Paulo, SP · Atendimento remoto em todo o Brasil",
    href: null,
  },
];

export const services = [
  "Abertura de Empresa",
  "Contabilidade Mensal",
  "Planejamento Tributário",
  "Folha de Pagamento",
  "Obrigações Acessórias",
  "Consultoria Empresarial",
];

export const steps: Step[] = [
  {
    num: "01",
    title: "Diagnóstico gratuito",
    description:
      "Conversamos sobre seu negócio, entendemos suas necessidades e identificamos oportunidades de economia fiscal.",
  },
  {
    num: "02",
    title: "Proposta personalizada",
    description:
      "Apresentamos um plano sob medida com serviços, prazos e investimento claro. Sem letras miúdas.",
  },
  {
    num: "03",
    title: "Migração e onboarding",
    description:
      "Nossa equipe cuida de toda a transição, transferência de documentos e configuração do portal digital.",
  },
  {
    num: "04",
    title: "Operação contínua",
    description:
      "Sua contabilidade rodando com relatórios mensais, entregas no prazo e suporte sempre disponível.",
  },
];

export const differentials: Differential[] = [
  {
    title: "Tecnologia integrada ao seu negócio",
    description:
      "Portal exclusivo com relatórios em tempo real, emissão de notas fiscais, envio de documentos e comunicação direta com seu contador — tudo em um só lugar, 24 horas por dia.",
  },
  {
    title: "Contador dedicado e atendimento personalizado",
    description:
      "Cada cliente tem um contador responsável que conhece profundamente o seu negócio. Sem filas, sem chatbots — comunicação direta e eficiente quando você precisar.",
  },
  {
    title: "Economia tributária comprovada",
    description:
      "Nossos clientes economizam em média 18% em impostos com nosso planejamento tributário estratégico. Analisamos seu negócio e encontramos o regime mais vantajoso legalmente.",
  },
  {
    title: "Segurança e compliance total",
    description:
      "Zero autuações fiscais em nossa carteira. Mantemos você sempre em conformidade com todas as obrigações tributárias, trabalhistas e contábeis — sem surpresas.",
  },
];

export const footerLinks = {
  Serviços: [
    "Abertura de Empresa",
    "Contabilidade Mensal",
    "Planejamento Tributário",
    "Folha de Pagamento",
    "Consultoria",
  ],
  Empresa: [
    "Sobre Nós",
    "Nossa Equipe",
    "Blog Contábil",
    "Casos de Sucesso",
    "Carreiras",
  ],
  Contato: ["(11) 99999-0000", "contato@lcnv.com.br", "São Paulo, SP"],
};

export const servicesSection: Service[] = [
  {
    num: "01",
    icon: Shield,
    title: "Abertura de Empresas",
    description:
      "MEI, ME, LTDA ou SA — abrimos sua empresa com agilidade e no regime tributário mais vantajoso para o seu modelo de negócio.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Contabilidade Mensal",
    description:
      "Escrituração contábil, balanços, DRE e relatórios gerenciais entregues mensalmente com clareza e precisão.",
  },
  {
    num: "03",
    icon: Star,
    title: "Planejamento Tributário",
    description:
      "Redução legal da carga tributária com análise do regime mais adequado — Simples Nacional, Lucro Presumido ou Real.",
  },
  {
    num: "04",
    icon: Users,
    title: "Folha de Pagamento",
    description:
      "Processamento da folha, encargos trabalhistas, FGTS, e-Social e toda a gestão de RH com compliance total.",
  },
  {
    num: "05",
    icon: Clock,
    title: "Obrigações Acessórias",
    description:
      "SPED, ECF, ECD, DEFIS e todas as declarações fiscais entregues no prazo, sem multas ou complicações.",
  },
  {
    num: "06",
    icon: Package,
    title: "Consultoria Empresarial",
    description:
      "Análise financeira, planejamento estratégico e suporte para decisões de crescimento com visão contábil e de negócios.",
  },
];
