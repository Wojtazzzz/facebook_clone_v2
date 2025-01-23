'use server';

import { api } from '@/utils/api';
import { cookies } from 'next/headers';

type LikeActionParams = {
    postId: number;
    like: boolean;
}

export async function likeAction({ postId, like }: LikeActionParams) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (like) {
         await api(token).post({}, `/post_likes/${postId}`).res();
    } else {
        await api(token).delete(`/post_likes/${postId}`).res();
    }
}
