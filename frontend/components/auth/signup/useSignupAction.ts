'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema } from "./signup.schema"
import { SignupFormValues } from "./signup.schema"
import { toast } from 'sonner'
// import { useRegisterMutation } from '@/graphql/generated/graphql'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useRegister = () => {
    const [mutationLogin, { loading, error }] = useRegisterMutation()

    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        }
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const register = async (values: SignupFormValues) => {
        try {
            const { confirmPassword, ...dataInput } = values
            const { data } = await mutationLogin({
                variables: {
                    data: dataInput
                }
            })

            const user = data?.register?.id

            if (!user) {
                return toast.error('Error lors de la connexion')
            }

            toast.success("Inscription réussi", {
                description: 'Votre inscription a été enrégistré! Redirection en cours...'
            })

            router.replace('/login')
            return data

        } catch (error) {
            toast.error('Erreur de la créatiuon de compte', {
                description: "Une erreur est survenu"
            })
        }

    }
    return { form, loading, showPassword, register, handleShowPassword, error }

}