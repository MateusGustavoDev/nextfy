'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function createSession(accessToken: string, expiresAt: string) {
  const cookieStore = await cookies()

  cookieStore.set({
    name: 'customerAuth',
    value: accessToken,
    httpOnly: true,
    path: '/',
  })

  redirect('/')
}
