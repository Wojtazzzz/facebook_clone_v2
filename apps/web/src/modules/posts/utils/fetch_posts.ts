import { api } from '@/utils/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
	data: z.array(
		z.object({
			id: z.number(),
			content: z.string(),
		}),
	),
});

export type Post = z.infer<typeof schema>['data'][number];

export const fetchPosts = async () => {
	const cookieStore = await cookies();
	const token = cookieStore.get('token')?.value;

	return await api(token)
		.get('/users/1/posts')
		.unauthorized(() => {
			redirect('/login');
		})
		.json(async (response) => {
			return [];
			const { error, data } = await schema.safeParseAsync(response);

			if (error) {
				throw new Error('Invalid data');
			}

			return data.data;
		});
};
