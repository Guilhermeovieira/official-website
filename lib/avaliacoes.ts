export interface Testimonial {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string | null;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Rubenal Hermano Santos",
    rating: 5,
    date: "6 meses atrás",
    text: "Ótima, a LCNV é uma empresa contábil de muita eficiência e atendimento de qualidade, primoroso com seus clientes, eu não tenho que reclamar, forte abraço amigos.",
  },
  {
    id: 2, 
    author: "José Pineda",
    rating: 5,
    date: "6 meses atrás",
    text: "Excelentes profissionais, muito atenciosos me auxiliaram em tudo que eu precisei SUPER RECOMENDO",
  },
  {
    id: 3,
    author: "Marcus Vinicius Januario",
    rating: 5,
    date: "6 meses atrás",
    text: "Contabilidade séria e honesta, podem ter certeza que vocês estarão bem protegidos, satisfação total 100%!!",
  },
  {
    id: 4,
    author: "Adriana F. Lopes",
    rating: 5,
    date: "6 meses atrás",
    text: "Trabalhamos a Anos, Empresa honesta e profissionais Excelentes..Super recomendo..",
  },
  {
    id: 5,
    author: "MIZ LIBRAS Tradução e Ensino",
    rating: 5,
    date: "6 meses atrás",
    text: "Profissionais atenciosos e competentes. Organização impar e atendimento rápido. Tudo de bom",
  },
  {
    id: 6,
    author: "Wiliam Cavalcante",
    rating: 5,
    date: "6 meses atrás",
    text: "Sou cliente mais que 10 anos, uma ótima equipe",
  },
  {
    id: 7,
    author: "Elias Bezerra",
    rating: 5,
    date: "6 meses atrás",
    text: "Recomendo a LCNV pelo profissionalismo e agilidade.",
  }
];
