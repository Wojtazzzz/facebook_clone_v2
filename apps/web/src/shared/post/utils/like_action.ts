'use server';

import { api } from '@/utils/api';
import { cookies } from 'next/headers';

type LikeActionParams = {
    postId: number;
}

export async function likeAction({ postId }: LikeActionParams) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    await api(token).post({}, `/post_likes/${postId}`).res();
}
