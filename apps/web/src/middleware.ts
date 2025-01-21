import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

const GUEST_ROUTES = ['/login'];
const AUTH_ROUTES = ['/'];

const REDIRECT_GUEST = '/login';
const REDIRECT_AUTHORIZED = '/';

export async function middleware(request: NextRequest) {
	const cookieStore = await cookies();
	const token = cookieStore.get('token')?.value;

	const isUserLoggedIn = token && token.length > 0;

	if (GUEST_ROUTES.includes(request.nextUrl.pathname)) {
		if (isUserLoggedIn) {
			return NextResponse.redirect(
				new URL(REDIRECT_AUTHORIZED, request.url),
			);
		}
	}

	if (AUTH_ROUTES.includes(request.nextUrl.pathname)) {
		if (!isUserLoggedIn) {
			return NextResponse.redirect(new URL(REDIRECT_GUEST, request.url));
		}
	}
}
