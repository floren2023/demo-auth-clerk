import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server'
import {NextResponse} from "next/server"

const isProtectedRoute = createRouteMatcher(['/client', '/admin'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isClientRoute = createRouteMatcher(['/client(.*)'])

export default clerkMiddleware(async(auth,request)=>{
  
  if (isProtectedRoute(request)){
     await auth.protect()
     const role=(await auth()).sessionClaims?.metadata?.role
     
    if (isAdminRoute(request) && role !== 'Admin') {
      const url = new URL('/dashboard', request.url)
      return NextResponse.redirect(url)
    }
    
    
   
    
    if (isClientRoute(request) && (await auth()).sessionClaims?.metadata?.role !== 'Member') {
      const url = new URL('/dashboard', request.url)
      return NextResponse.redirect(url)
    }
    

    }
  
  return NextResponse.next()

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}