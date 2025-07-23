'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { links } from "@/utils/link"
import NavLink from "@/components/navbar/NavLink"
import Link from "next/link"

const platsLinks = [
  { title: "Pizza", href: "/plats/pizza", description: "Pizza maison." },
  { title: "Burger", href: "/plats/burger", description: "Burgers frais." },
  { title: "Malagasy", href: "/plats/malagasy", description: "Cuisine locale." },
]

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* Liens normaux sauf "Plats" */}
        {links
          .filter((link) => link.label !== "Plats")
          .map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <NavLink href={link.href} label={link.label} />
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

        {/* Dropdown pour "Plats" */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Plats</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 w-64">
              {platsLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium">{item.title}</div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
