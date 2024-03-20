import { z } from "zod";

export const LoginSchemas = z.object({
    email: z.string().min(1, 'Este campo es obligatorio'),
    password: z.string().min(1, 'Este campo es obligatorio')
})  
