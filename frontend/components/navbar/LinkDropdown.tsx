'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Login from "../auth/login/Login"
import useView from "@/hooks/useView"
import Register from "../auth/signup/register"

const LinkDropdown = () => {
  const { view, setView } = useView()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {view === "login" ? (
          <p>Se connecter</p>
        ) : (
          <p>S'inscrire</p>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] p-4">
        {view === "login" ? (
          <Login onSwitch={() => setView("register")} />
        ) : (
          <Register onSwitch={() => setView("login")} />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinkDropdown