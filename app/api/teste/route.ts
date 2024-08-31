import { getEnv } from '@vercel/functions'

export const runtime = 'edge'

export const preferredRegion = ['gru1']

export async function GET() {
  const { VERCEL_REGION } = getEnv()
  return new Response(`Hello from ${VERCEL_REGION}`, { status: 200 })
}
