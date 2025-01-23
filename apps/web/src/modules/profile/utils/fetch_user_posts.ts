import { api } from '@/utils/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
	data: z.object({
		id: z.number(),
		image_url: z.string().nullable(),
		first_name: z.string(),
		last_name: z.string(),
		posts: z.array(
			z.object({
				id: z.number(),
				inserted_at: z.string(),
				content: z.string(),
				is_liked: z.boolean(),
			}),
		),
	}),
});

export type UserWithPosts = z.infer<typeof schema>['data'];

type FetchUserPostsParams = {
	userId: number;
	limit: number;
	offset: number
}

export const fetchUserPosts = async ({userId, limit, offset}: FetchUserPostsParams) => {
	const cookieStore = await cookies();
	const token = cookieStore.get('token')?.value;

	return await api(token)
		.get(`/users/${userId}/posts?limit=${limit}&offset=${offset}`)
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
