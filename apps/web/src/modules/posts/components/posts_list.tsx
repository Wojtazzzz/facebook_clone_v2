import { type Post as TPost } from '../utils/fetch_posts';
import { Post } from '../../../components/post';

type PostsListProps = {
	posts: TPost[];
};

export const PostsList = async ({ posts }: PostsListProps) => {
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
