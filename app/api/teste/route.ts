import { getEnv } from '@vercel/functions'

export async function GET() {
  const { VERCEL_REGION } = getEnv()
  return new Response(`Hello from ${VERCEL_REGION}`)
}
