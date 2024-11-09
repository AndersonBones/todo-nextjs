
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === '/profile'){
        return NextResponse.redirect(new URL('/home', request.url))
    }
  
}
 
// export const config = {
//   matcher: '/about/:path*',
// }