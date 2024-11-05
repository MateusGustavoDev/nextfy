import { z } from 'zod'

export const SignupFormScheme = z.object({
  firstName: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }).trim(),
  lastName: z.string().min(2, { message: 'O sobrenome deve ter pelo menos 2 caracteres.' }).trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Deve ter pelo menos 8 caracteres.' })
    .regex(/[a-zA-Z]/, { message: 'Conter pelo menos uma letra.' })
    .regex(/[0-9]/, { message: 'Conter pelo menos um numero.' })
    .trim(),
})

export const LoginFormScheme = z.object({
  email: z.string().email({ message: 'Insira um email válido.' }),
  password: z.string().min(1, { message: 'A senha não pode ser vazio.' }),
})

export type SignupFormState = {
  firstName?: FormDataEntryValue | null
  lastName?: FormDataEntryValue | null
  email?: FormDataEntryValue | null
  password?: FormDataEntryValue | null
  errors:
    | {
        firstName?: string[] | undefined
        lastName?: string[] | undefined
        email?: string[] | undefined
        password?: string[] | undefined
      }
    | undefined
}

export type LoginFormState = {
  email: FormDataEntryValue | null
  password: FormDataEntryValue | null
  errors:
    | {
        email?: string[] | undefined
        password?: string[] | undefined
      }
    | undefined
}
