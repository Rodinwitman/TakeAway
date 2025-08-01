import { useRouter } from 'next/navigation'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { LoginFormValues, loginSchema } from "./connexion.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react';

export const useConnexion = () => {
    const [showPassword, setShowpassword] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleShowPassword = () => {
        setShowpassword(!showPassword)
    }

    const connexion = async (dataLogin: LoginFormValues) => {
        try {
            setLoading(true)
            if (!dataLogin.email || dataLogin.password) {
                setLoading(false)
                return toast.error("Email et mot de passe requis")
            }

            const { email, password } = dataLogin
            const res = await signIn('credentials', {
                redirect: false,
                email, password,
                callbackUrl: '/'
            })

            setLoading(false)
            if(res?.error) {
                setError(res.error)
                return toast.error("Erreur lors de la connexion")
            }

            toast.success("Connexion réussie", {
                description: "Bienvenu! Redirection en cours...",
            })

            router.push((res?.url as string) || '/')
            return res

        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            } else {
                toast.error("Une erreur est survenu")
            }
            throw error
        }
    }
    return { handleShowPassword, connexion, form, loading, error, showPassword }
}