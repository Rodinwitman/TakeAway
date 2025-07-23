import { z } from 'zod'
export const loginSchema = z.object({
    email: z.string().email({ message: "Email invalide" }),
    password: z.string().min(6, { message: "Mot de passse trop court" })
})

export type LoginFormValues = z.infer<typeof loginSchema>
