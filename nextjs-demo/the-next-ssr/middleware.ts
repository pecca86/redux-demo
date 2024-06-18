import { NextResponse } from "next/server"
import { auth } from "./app/_lib/auth"

// export function middleware(request: any) {
//   // Do something
//   return NextResponse.redirect(new URL('/about', request.url))
// }

export const middleware = auth;


// specify on which routes this middleware should be applied
export const config = {
    matcher: ['/account']
}