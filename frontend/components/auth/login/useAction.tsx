import { useForm } from 'react-hook-form'
import { LoginFormValues, loginSchema } from './login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
// import { useAuthStore } from '../stores/useAuthStore'
// import { userUserStore } from '../user/stores/useUserStore'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';


export const useLogin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const login = async (dataLogin: LoginFormValues) => {
        try {
            setLoading(true)
            if (!dataLogin.email || !dataLogin.password) {
                setLoading(false)
                return toast.error("Email et mot de passe requis")
            }

            const { email, password } = dataLogin
            const res = await signIn('credentials', {
                redirect: false,
                email, password,
                clallbackUrl: '/'
            })

            setLoading(false)

            if (res?.error) {
                setError(res.error)
                return toast.error("Erreur lors de la connexion")
            }

            toast.success("Connexion réussie", {
                description: `Bienvenue! Redirection en cours...`,
            })

            router.push((res?.url as string) || '/')
            return res

        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            } else {
                toast.error('Une erreur est survenu')
            }
            throw error
        }
    }
    return {
        login, handleShowPassword, loading, form, error, showPassword
    }

}
