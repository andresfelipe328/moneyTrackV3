import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  if (
    token &&
    (req.nextUrl.pathname.startsWith("/sign-in") ||
      req.nextUrl.pathname.startsWith("/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  } else if (
    !token &&
    !(
      req.nextUrl.pathname.startsWith("/sign-in") ||
      req.nextUrl.pathname.startsWith("/sign-up")
    )
  )
    return NextResponse.redirect(new URL("/sign-in", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/bills-transactions/:path*",
    "/reports/:path*",
    "/sign-in",
    "/sign-up",
    "/link-to-bank",
  ],
};
