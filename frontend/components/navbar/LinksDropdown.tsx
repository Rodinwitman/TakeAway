'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Connexion from "../auth/connexion/connexion"
import useView from "@/hooks/useView"
import Inscription from "../auth/inscription/inscription"

const LinkDropdown = () => {
  const { view, setView } = useView()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {view === "connexion" ? (
          <p>Se connecter</p>
        ) : (
          <p>S'inscrire</p>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] p-4">
        {view === "connexion" ? (
          <Connexion onSwitch={() => setView("inscription")} />
        ) : (
          <Inscription onSwitch={() => setView("connexion")} />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkDropdown