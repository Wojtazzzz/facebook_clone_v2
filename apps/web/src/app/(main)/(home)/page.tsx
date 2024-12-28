import { PostsList } from '@/modules/posts/components/posts_list';
import { fetchPosts } from '@/modules/posts/utils/fetch_posts';

export default async function HomePage() {
	const posts = await fetchPosts();

	return <PostsList posts={posts} />;
}
