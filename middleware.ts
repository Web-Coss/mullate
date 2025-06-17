import { NextRequest, NextResponse } from "next/server"

const DEFAULT_LOCALE = "ko"

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // 루트 경로만 접근한 경우
    if (pathname === "/") {
        const url = req.nextUrl.clone()
        url.pathname = `/${DEFAULT_LOCALE}}`
        return NextResponse.redirect(url)
    }

    // /ko, /en이 이미 있는 경우는 패스
    if (/^\/(ko|en)(\/|$)/.test(pathname)) {
        return NextResponse.next()
    }

    // 그 외 경로도 ko로 리디렉션
    const url = req.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`
    return NextResponse.redirect(url)
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico|static).*)"],
}