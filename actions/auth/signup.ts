'use server'
import { ERROR_MESSAGES } from '@/lib/constants'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { ActionStateType } from '@/lib/shopify/fetch/types'
import { createCustomerAccountMutation } from '@/lib/shopify/graphql/mutations/customer'
import { CreateCustomerAccountMutation } from '@/lib/shopify/types/storefront.generated'
import { SignupFormScheme } from '@/lib/zod/auth'
import { loginAction } from './login'

export async function signupAction(formData: FormData): Promise<ActionStateType> {
  const validateFields = SignupFormScheme.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validateFields.success) {
    return {
      errors: { message: ERROR_MESSAGES.customerCreateAccount },
    }
  }

  const { firstName, lastName, email, password } = validateFields.data

  const { data, error } = await shopifyFetch<CreateCustomerAccountMutation>({
    query: createCustomerAccountMutation,
    variables: {
      input: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    },
  })

  if (error) {
    return {
      errors: { message: ERROR_MESSAGES.customerCreateAccount },
    }
  }

  if (data?.customerCreate?.customerUserErrors[0]) {
    return {
      errors: { message: data.customerCreate.customerUserErrors[0].message },
    }
  }

  await loginAction({ customerEmail: email, customerPassword: password })

  return {
    errors: undefined,
  }
}
