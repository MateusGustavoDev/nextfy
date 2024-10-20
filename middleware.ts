import { NextResponse, NextRequest } from 'next/server'
import { verifySessionMiddleware } from './actions/auth/session'

const protectedRoutes = ['/orders', '/address']
const authRestrictedRoutes = ['/login', '/signup']

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(pathname)
  const isAuthRestrictedRoute = authRestrictedRoutes.includes(pathname)

  const customerAccessToken = request.cookies.get('customerAuth')?.value
  const { isAuth } = await verifySessionMiddleware(customerAccessToken)

  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

  if (isAuthRestrictedRoute && isAuth) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
}

export const config = {
  matcher: ['/login', '/signup', '/orders', '/address'],
}
