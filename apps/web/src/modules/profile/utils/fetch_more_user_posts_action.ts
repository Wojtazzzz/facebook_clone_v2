'use server';

import { fetchUserPosts } from './fetch_user_posts';

type FetchMoreUserPostsActionParams = {
    userId: number
    offset: number;
    limit: number;
}

export async function fetchMoreUserPostsAction(params: FetchMoreUserPostsActionParams) {
    return await fetchUserPosts(params);
}
