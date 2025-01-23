'use server';

import { fetchPosts } from './fetch_posts';

type FetchMorePostsActionParams = {
    offset: number;
    limit: number;
}

export async function fetchMorePostsAction({ offset, limit }: FetchMorePostsActionParams) {
    return await fetchPosts(offset, limit);
}
