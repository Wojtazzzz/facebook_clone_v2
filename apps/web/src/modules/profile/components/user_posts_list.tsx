'use client';

import { Post } from '@/shared/post/components/post';
import { type UserWithPosts } from '../utils/fetch_user_posts';
import { usePosts } from '../hooks/use_posts';
import { Button } from '@/components/ui/button';

type PostsListProps = {
	user: UserWithPosts;
};

export const UserPostsList = ({ user }: PostsListProps) => {
	const { posts, isAllLoaded, handleFetchMorePosts } = usePosts(
		user.id,
		user.posts,
	);

	return (
		<section aria-label="Posts list" className="space-y-8">
			<ol className="space-y-8">
				{posts.map((post) => (
					<li key={post.id}>
						<Post
							post={{
								...post,
								user: {
									id: user.id,
									first_name: user.first_name,
									last_name: user.last_name,
									image_url: user.image_url,
								},
							}}
						/>
					</li>
				))}
			</ol>

			{!isAllLoaded && (
				<Button onClick={handleFetchMorePosts}>Fetch more posts</Button>
			)}
		</section>
	);
};
