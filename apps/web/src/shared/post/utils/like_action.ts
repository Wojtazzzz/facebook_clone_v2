'use server';

import { api } from '@/utils/api';
import { cookies } from 'next/headers';
import { z } from 'zod';

type LikeActionParams = {
    postId: number;
    like: boolean;
}

const schema = z.object({
    id: z.number(),
    content: z.string(),
    is_liked: z.boolean(),
    likes: z.number(),
    inserted_at: z.string(),
    user: z.object({
        id: z.number(),
        first_name: z.string(),
        last_name: z.string(),
        image_url: z.string(),
    }),
});

export async function likeAction({ postId, like }: LikeActionParams) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (like) {
        return await api(token).post({}, `/post_likes/${postId}`).json(async (response) => {
            const { success, data } = await schema.safeParseAsync(response);

            if (!success) {
                throw new Error('Invalid data.')
            }

            return data;
        });
    } 

    return await api(token).delete(`/post_likes/${postId}`).json(async (response) => {
        const { success, data } = await schema.safeParseAsync(response);

        if (!success) {
            throw new Error('Invalid data.')
        }

        return data;
    });
}
