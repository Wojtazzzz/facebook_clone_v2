'use server';

import { api } from '@/utils/api';
import { cookies } from 'next/headers';

export async function logoutAction() {
	const cookieStore = await cookies();
	const token = cookieStore.get('token')?.value;

	await api(token).post({}, '/users/logout').res();

	const cookiesStore = await cookies();

	cookiesStore.delete('token');
}
