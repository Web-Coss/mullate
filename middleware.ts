import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['ko', 'en'];
const defaultLocale = 'ko';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
});

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log('🔍 [middleware] pathname:', pathname);

    if (pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = `/${defaultLocale}`;
        console.log('➡️ Redirecting to:', url.pathname);
        return Response.redirect(url);
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/', '/(ko|en)/:path*'],
};