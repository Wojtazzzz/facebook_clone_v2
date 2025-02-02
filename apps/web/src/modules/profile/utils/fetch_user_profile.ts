import { api } from '@/utils/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
	data: z.object({
		id: z.number(),
		first_name: z.string(),
		last_name: z.string(),
		image_url: z.string().nullable(),
		friends_count: z.number(),
		friends: z.array(
			z.object({
				id: z.number(),
				first_name: z.string(),
				last_name: z.string(),
				image_url: z.string().nullable(),
			}),
		),
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

			return data.data;
		});
};
