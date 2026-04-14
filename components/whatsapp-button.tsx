"use client"

import { MessageCircle } from "lucide-react"
import WhatsappIcon from "./icons/WhatsappIcon"

const WHATSAPP_NUMBER = "5511999999999"
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, tenho interesse nos serviços de contabilidade.")

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contato via WhatsApp"
    >
      <WhatsappIcon  />
    </a>
  )
}
