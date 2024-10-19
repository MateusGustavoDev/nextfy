'use client'
import { LoginFormErrors, LoginFormScheme } from '@/lib/zod/auth'
import Link from 'next/link'
import { ActionButton } from '../action-button'
import { useActionState } from 'react'
import { Input, InputError } from '../input'
import { loginAction } from '@/actions/auth/login'

export function LoginForm() {
  const [formErrors, action] = useActionState(async (prevState: LoginFormErrors, formData: FormData) => {
    const validateFields = LoginFormScheme.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (!validateFields.success) {
      return validateFields.error.flatten().fieldErrors
    }

    const { email, password } = validateFields.data

    const { errors } = await loginAction({ customerEmail: email, customerPassword: password })

    if (errors) {
      alert(errors.message)
    }
  }, undefined)

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input name="email" label="Email" type="email" placeholder="m@exemplo.com" />
        {formErrors?.email && <InputError>{formErrors.email}</InputError>}

        <Input name="password" label="Senha" placeholder="Digite uma senha" />
        {formErrors?.password && <InputError>{formErrors.password}</InputError>}
      </div>
      <ActionButton>Login</ActionButton>
      <Link href="/signup" className="text-sm underline">
        Criar conta
      </Link>
    </form>
  )
}
