import { links } from "@/utils/links"
import Link from "next/link"

const Menu = () => {
  return (
    <div>
        <ul className="flex gap-4 p-4">
            {
                links.map((link) => (
                    <li key={link.href} className="">
                        <Link href={link.href}>
                            <p>{link.label}</p>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu