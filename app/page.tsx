import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { DifferentialsSection } from "@/components/sections/differentials-section"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
