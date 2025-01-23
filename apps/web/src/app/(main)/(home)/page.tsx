import { PostsList } from '@/modules/posts/components/posts_list';
import { fetchPosts } from '@/modules/posts/utils/fetch_posts';
import { HOME_PAGE_POSTS_PER_PAGE } from '@/utils/constants';

export default async function HomePage() {
	const posts = await fetchPosts(0, HOME_PAGE_POSTS_PER_PAGE);

	return <PostsList posts={posts} />;
}
