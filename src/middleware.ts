import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname, origin } = req.nextUrl

  console.log("Current pathname:", pathname)
  console.log("Origin:", origin)

  const isRedirect = req.headers.get('x-middleware-rewrite') === 'true'
  console.log("isRedirect", isRedirect)

  if (isRedirect && pathname === '/dashboard') {
    console.log("Allowing access to /dashboard due to successful redirect")
    return NextResponse.next()
  }

  if (['/practice_questions', '/review', '/billing'].includes(pathname) || pathname.startsWith('/dashboard')) {
    console.log("Checking protected route:", pathname)
    if (!token) {
      console.log("No token found")
      if (pathname === '/dashboard' || !pathname.startsWith('/dashboard')) {
        console.log("Redirecting to home due to no token")
        return NextResponse.redirect(new URL('/', origin))
      }
      
      const match = pathname.match(/^\/dashboard\/(.+)$/)
      if (match) {
        const email = match[1]
        console.log("Extracted email:", email)
        
        try {
          console.log("Making API request to:", `${origin}/api/signin`)
          const apiResponse = await fetch(`${origin}/api/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ identifier: email }),
          })
          
          const data = await apiResponse.json()
          console.log("API response:", data)
          
          if (data.user_status === true) {
            console.log("User status is true, redirecting to /dashboard")
            const url = req.nextUrl.clone()
            url.pathname = '/dashboard'
            const response = NextResponse.rewrite(url)
            // response.headers.set('x-middleware-rewrite', 'true')
            return response
          } else {
            console.log("User status is false, redirecting to home")
            return NextResponse.redirect(new URL('/', origin))
          }
        } catch (error) {
          console.error('Error checking user status:', error)
          return NextResponse.redirect(new URL('/', origin))
        }
      }
      
      console.log("No email match, redirecting to home")
      return NextResponse.redirect(new URL('/', origin))
    } else {
      console.log("Token found, allowing access")
      if (pathname.startsWith('/dashboard/')) {
        console.log("Allowing access to /dashboard")
        return NextResponse.redirect(new URL('/dashboard', origin))
      }
    }
  }

  console.log("Allowing access by default")
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/practice_questions', '/review', '/billing']
}