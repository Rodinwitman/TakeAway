import Navigation_Menu from "@/components/navbar/Navigation_Menu"
import { links } from "@/utils/links"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex gap-4 items-center">
            {/* 1. Lien Accueil */}
            <Link href={links[0].href}>{links[0].label}</Link>

            {/* 2. Menu déroulant personnalisé */}
            <Navigation_Menu />

            {/* 3. Les autres liens */}
            {links.slice(1).map((link) => (
                <Link key={link.href} href={link.href}>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}

export default Navbar
