'use server';

import { api } from '@/utils/api';
import { cookies } from 'next/headers';
import { z } from 'zod';

type LoginPayload = {
	email: string;
	password: string;
};

const responseSchema = z.object({
	token: z.string(),
	user: z.object({
		email: z.string(),
	}),
});

export async function loginAction(payload: LoginPayload) {
	const data = {
		user: payload,
	};

	const response = await api()
		.post(data, '/users/login')
		.json(async (response) => {
			const { data, error } =
				await responseSchema.safeParseAsync(response);

			if (error) {
				throw new Error('Invalid response');
			}

			return data;
		})
		.catch((error) => {
			if (error.status === 401) {
				throw new Error(JSON.parse(error.message).error);
			}

			throw new Error(error);
		});

	const cookiesStore = await cookies();

	cookiesStore.set('token', response.token, {
		httpOnly: true,
		secure: true,
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		sameSite: 'lax',
		path: '/',
	});
}
