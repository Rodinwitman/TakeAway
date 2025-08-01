import { useState } from "react"


const useView = () => {
    const [view, setView] = useState<"connexion" | "inscription">("connexion")
  return {view, setView}
}

export default useView