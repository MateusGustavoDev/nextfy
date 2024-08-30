import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  return NextResponse.json(
    { message: `Hello from ${process.env.VERCEL_REGION}` },
    { headers: { 'Cache-Control': 'max-age=10' }, status: 200 },
  )
}
