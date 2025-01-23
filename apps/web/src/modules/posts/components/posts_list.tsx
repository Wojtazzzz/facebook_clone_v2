'use client';

import { Post } from '@/shared/post/components/post';
import { type Post as TPost } from '../utils/fetch_posts';
import { usePosts } from '../hooks/use_posts';
import { Button } from '@/components/ui/button';

type PostsListProps = {
	posts: TPost[];
};

export const PostsList = (props: PostsListProps) => {
	const { posts, isAllLoaded, handleFetchMorePosts } = usePosts(props.posts);

	return (
		<section aria-label="Posts list" className="space-y-8">
			<ol className="space-y-8">
				{posts.map((post) => (
					<li key={post.id}>
						<Post post={post} />
					</li>
				))}
			</ol>

			{!isAllLoaded && (
				<Button onClick={handleFetchMorePosts}>Fetch more posts</Button>
			)}
		</section>
	);
};
