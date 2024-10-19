'use client'
import { signupAction } from '@/actions/auth/signup'
import { SignupFormErrors, SignupFormScheme } from '@/lib/zod/auth'
import Link from 'next/link'
import { ActionButton } from '../action-button'
import { useActionState } from 'react'
import { Input, InputError } from '../input'

export function SignupForm() {
  const [formErrors, action] = useActionState(async (prevState: SignupFormErrors, formData: FormData) => {
    const validateFields = SignupFormScheme.safeParse({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (!validateFields.success) {
      return validateFields.error.flatten().fieldErrors
    }

    const { errors } = await signupAction(formData)

    if (errors) {
      alert(errors.message)
    }
  }, undefined)

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input name="firstName" label="Nome" placeholder="Digite seu nome" />
        {formErrors?.firstName && <InputError>{formErrors.firstName}</InputError>}

        <Input name="lastName" label="Sobrenome" placeholder="Digite seu sobrenome" />
        {formErrors?.lastName && <InputError>{formErrors.lastName}</InputError>}

        <Input name="email" label="Email" type="email" placeholder="m@exemplo.com" />
        {formErrors?.email && <InputError>{formErrors.email}</InputError>}

        <Input name="password" label="Senha" placeholder="Digite uma senha" />
        {formErrors?.password && (
          <div className="text-red-500">
            <p>A senha deve ter:</p>
            <ul>
              {formErrors.password.map((error) => (
                <li key={error}>
                  <InputError>{error}</InputError>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <ActionButton>Criar conta</ActionButton>
      <Link href="/login" className="text-sm underline">
        Fazer login
      </Link>
    </form>
  )
}
