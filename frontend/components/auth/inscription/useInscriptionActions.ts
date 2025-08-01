'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { inscriptionSchema } from './inscription.schema'
import { InscriptionFormValues } from './inscription.schema'
import { toast } from 'sonner'
import { useInscriptionMutation } from '@/graphql/generated/graphql'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useInscription = () => {
    const [mutationLogin, { loading, error }] = useInscriptionMutation()

    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const form = useForm<InscriptionFormValues>({
        resolver: zodResolver(inscriptionSchema),
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

    const inscription = async (values: InscriptionFormValues) => {
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
    return { form, loading, showPassword, inscription, handleShowPassword, error }

}