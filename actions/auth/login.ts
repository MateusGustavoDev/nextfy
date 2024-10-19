'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { ActionStateType } from '@/lib/shopify/fetch/types'
import { customerAccessTokenCreateMutation } from '@/lib/shopify/graphql/mutations/customer'
import { CustomerAccessTokenCreateMutation } from '@/lib/shopify/types/storefront.generated'
import { LoginFormScheme } from '@/lib/zod/auth'
import { createSession } from './create-session'

type LoginAction = {
  customerEmail: string
  customerPassword: string
}

export async function loginAction({ customerEmail, customerPassword }: LoginAction): Promise<ActionStateType> {
  const validateFields = LoginFormScheme.safeParse({
    email: customerEmail,
    password: customerPassword,
  })

  if (!validateFields.success) {
    return {
      errors: { message: 'Dados do login estão inválidos.' },
    }
  }

  const { email, password } = validateFields.data

  const { data, error } = await shopifyFetch<CustomerAccessTokenCreateMutation>({
    query: customerAccessTokenCreateMutation,
    variables: {
      input: {
        email: email,
        password: password,
      },
    },
  })

  if (error) {
    return {
      errors: { message: 'Não foi possível fazer o login.' },
    }
  }

  if (data?.customerAccessTokenCreate?.customerUserErrors[0]) {
    return {
      errors: { message: data.customerAccessTokenCreate.customerUserErrors[0].message },
    }
  }

  const customerAccessToken = data?.customerAccessTokenCreate?.customerAccessToken

  if (customerAccessToken) {
    await createSession(customerAccessToken.accessToken, customerAccessToken.expiresAt)
  }

  return {
    errors: undefined,
  }
}
