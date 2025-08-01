import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
