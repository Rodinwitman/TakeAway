import { useState } from "react"


const useView = () => {
    const [view, setView] = useState<"login" | "register">("login")
  return {view, setView}
}

export default useView