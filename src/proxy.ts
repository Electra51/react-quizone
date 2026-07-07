// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public paths
  const publicPaths = ["/login", "/register", "/"];
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  // Protected paths
  const protectedPaths = ["/dashboard", "/admin", "/assessment"];
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));

  // Get token from cookies
  const accessToken = request.cookies.get("accessToken")?.value;

  // If accessing protected route without token
  if (isProtectedPath && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If authenticated user tries to access auth pages
  if (isPublicPath && accessToken && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/assessment/:path*",
    "/login",
    "/register",
  ],
};