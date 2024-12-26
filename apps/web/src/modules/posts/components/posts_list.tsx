import { fetchPosts } from '../utils/fetch_posts';
import { Post } from './post';

export const PostsList = async () => {
	const posts = await fetchPosts();

	return (
		<ol className="space-y-8">
			{posts.map((post) => (
				<li key={post.id}>
					<Post post={post} />
				</li>
			))}
		</ol>
	);
};
