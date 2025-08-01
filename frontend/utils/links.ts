import Navigation_Menu from "@/components/navbar/Navigation_Menu"
import { ReactNode } from "react"

type NavLink = {
  href: string
  label: string | ReactNode
}

export const links: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/promotions", label: "Promotions" },
  { href: "/a_propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
//   { href: "/se_connecter", label: "Se connecter" }
]
