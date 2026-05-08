import { LucideIcon } from "lucide-react"

export interface Step {
  num: string
  title: string
  description: string
}

export interface Differential {
  title: string
  description: string
}

export interface Service {
  num: string
  icon: LucideIcon
  title: string
  description: string
}