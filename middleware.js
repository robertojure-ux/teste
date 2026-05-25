import { reportLanguage } from './lib/function/lang';
import { locales } from './lib/i18n';
import { NextRequest, NextResponse } from 'next/server';

const rewritePaths = [
    { pattern: /^\/$/, destination: '/pt/' },
	{ pattern: /^\/about(\/)?$/, destination: '/pt/about' },
    { pattern: /^\/blog(\/)?$/, destination: '/pt/blog' },
    { pattern: /^\/blog\/([^\/]+)(\/)?$/, destination: '/pt/blog/$1' },
];

export function middleware(request) {
	const { pathname } = request.nextUrl;

	const lang = reportLanguage(pathname);
	request.headers.set('x-pathname', pathname);
	request.headers.set('x-language-directory', lang);

	const isExit = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

	for (const { pattern, destination } of rewritePaths) {
		const match = pathname.match(pattern);
		if (match) {
			request.nextUrl.pathname = pathname.replace(pattern, destination);
			return NextResponse.rewrite(request.nextUrl);
		}
	}

	if (isExit) return NextResponse.next();

	request.nextUrl.pathname = `/`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!_next)(?!.*\\.(?:ico|png|gif|svg|jpg|jpeg|xml|txt|mp4)$)(?!/api).*)'],
};
