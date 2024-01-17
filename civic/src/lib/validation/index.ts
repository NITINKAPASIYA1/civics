import * as z from "zod"

export const SignupValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message:'Password must have 8 letter'}),
    confirmpassword: z.string().min(8,{message:'Password must be same'})
})
  
export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message:'Password must have 8 letter'}),
})