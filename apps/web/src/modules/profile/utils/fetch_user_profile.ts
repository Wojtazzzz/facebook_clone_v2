import { api } from '@/utils/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
	user: z.object({
		id: z.number(),
		email: z.string(),
		first_name: z.string(),
		last_name: z.string(),
		image_url: z.string(),
	}),
});

export const fetchUserProfile = async (userId: number) => {
	const cookieStore = await cookies();
	const token = cookieStore.get('token')?.value;

	return await api(token)
		.get(`/users/${userId}`)
		.unauthorized(() => {
			redirect('/login');
		})
		.json(async (response) => {
			const { error, data } = await schema.safeParseAsync(response);

			if (error) {
				throw new Error('Invalid data');
			}

			return data.user;
		});
};
