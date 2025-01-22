'use server';

import { api } from '@/utils/api';
import { cookies } from 'next/headers';

type DislikeActionParams = {
    postId: number;
}

export async function dislikeAction({ postId }: DislikeActionParams) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    await api(token).delete(`/post_likes/${postId}`).res();
}
