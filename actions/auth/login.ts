'use server'
import { shopifyFetch } from '@/lib/shopify/fetch/shopify-fetch'
import { ActionStateType } from '@/lib/shopify/fetch/types'
import { customerAccessTokenCreateMutation } from '@/lib/shopify/graphql/mutations/customer'
import { CustomerAccessTokenCreateMutation } from '@/lib/shopify/types/storefront.generated'
import { LoginFormErrors, LoginFormScheme } from '@/lib/zod/auth'
import { createSession } from './session'
import { ERROR_MESSAGES } from '@/lib/constants'

type LoginActionProps = {
  customerEmail: string
  customerPassword: string
}

type LoginAction = ActionStateType & {
  formErrors?: LoginFormErrors
}

export async function loginAction({ customerEmail, customerPassword }: LoginActionProps): Promise<LoginAction> {
  const validateFields = LoginFormScheme.safeParse({
    email: customerEmail,
    password: customerPassword,
  })

  if (!validateFields.success) {
    return {
      errors: { message: ERROR_MESSAGES.customerLogin },
      formErrors: validateFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validateFields.data

  const { data, errors } = await shopifyFetch<CustomerAccessTokenCreateMutation>({
    query: customerAccessTokenCreateMutation,
    variables: {
      input: {
        email: email,
        password: password,
      },
    },
  })

  if (errors) {
    return {
      errors: { message: ERROR_MESSAGES.customerLogin },
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
