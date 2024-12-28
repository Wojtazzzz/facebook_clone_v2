import { type UserWithPosts } from '../utils/fetch_user_posts';
import { Post } from '../../../components/post';

type PostsListProps = {
	user: UserWithPosts;
};

export const UserPostsList = async ({ user }: PostsListProps) => {
	return (
		<ol className="space-y-8">
			{user.posts.map((post) => (
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
	);
};
