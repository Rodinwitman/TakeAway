import {z} from 'zod'

export const signupSchema = z
.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Veuillez entrer un adresse email validé"),
    password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
    confirmPassword: z.string()
})
.refine(data => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspond pas",
    path: ['confirmPassword']
})

export type SignupFormValues = z.infer<typeof signupSchema>