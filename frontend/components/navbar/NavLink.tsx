'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import clsx from "clsx"

type NavLinkProps = {
  href: string
  label: string
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const underlineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!underlineRef.current) return

    if (isActive) {
      // Animation GSAP en boucle toutes les secondes
      gsap.to(underlineRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 1
      })
    } else {
      // Arrêter l'animation et remettre à zéro
      gsap.killTweensOf(underlineRef.current)
      gsap.set(underlineRef.current, { width: "0%" })
    }

    return () => {
      if (underlineRef.current) {
        gsap.killTweensOf(underlineRef.current)
      }
    }
  }, [isActive])

  return (
    <li 
      className={clsx(
        "relative inline-block font-medium",
        {
          // Hover effect pour les liens non actifs
          "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-red-600 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out": !isActive,
        }
      )}
    >
      <Link href={href}>{label}</Link>
      {/* Soulignement animé pour les liens actifs */}
      {isActive && (
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 h-[3px] bg-red-600 block"
          style={{ width: "0%" }}
        />
      )}
    </li>
  )
}

export default NavLink