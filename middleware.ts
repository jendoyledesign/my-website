import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let the password page and auth API through unconditionally
  if (pathname.startsWith("/password") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("site-auth");
  const secret = process.env.COOKIE_SECRET;

  if (secret && cookie?.value === secret) {
    return NextResponse.next();
  }

  // Redirect to password page, preserving intended destination
  const url = request.nextUrl.clone();
  url.pathname = "/password";
  url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  // Exclude Next.js internals, static assets, and files with extensions (images, videos, etc.)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)" ],
};
