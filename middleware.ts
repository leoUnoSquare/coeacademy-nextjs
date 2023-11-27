import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await getToken({ req: request });

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/signin") ||
    request.nextUrl.pathname.startsWith("/signup") ||
    request.nextUrl.pathname.startsWith("/reset");

  if (isAuthPage) {
    if (session) return NextResponse.redirect(new URL("/", request.url));

    return NextResponse.next();
  }

  if (!session) {
    const requestedPage = request.nextUrl.pathname;
    const newUrl = request.nextUrl.clone();

    newUrl.pathname = "/signin";
    newUrl.search = `p=${requestedPage}`;

    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/signin", "/signup", "/reset"],
};
