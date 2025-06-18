import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = `/${routing.defaultLocale}`;
        return NextResponse.redirect(url);
    }

    return createMiddleware(routing)(request);
}

export const config = {
    matcher: [
        '/',
        '/((?!api|trpc|_next|_vercel|.*\\..*|admin).*)'
    ]
};