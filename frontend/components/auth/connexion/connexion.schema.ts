import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "Email invalide" }),
    password: z.string().min(2, { message: "Mot de passe trop courte" })
})

export type LoginFormValues = z.infer<typeof loginSchema>