import { UserPostsList } from '@/modules/profile/components/user_posts_list';
import { fetchUserPosts } from '@/modules/profile/utils/fetch_user_posts';
import { PROFILE_PAGE_POSTS_PER_PAGE } from '@/utils/constants';

type ProfilePostsPageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function ProfilePostsPage({
	params,
}: ProfilePostsPageProps) {
	const user = await fetchUserPosts({
		userId: Number((await params).id),
		offset: 0,
		limit: PROFILE_PAGE_POSTS_PER_PAGE,
	});

	return (
		<div className="space-y-6">
			<div className="bg-bg-secondary rounded-lg p-4 mb-4">
				<input
					type="text"
					placeholder="What's on your mind?"
					className="w-full bg-bg-accent hover:bg-bg-accent-hover p-3 rounded-md text-gray-300"
				/>
			</div>

			<UserPostsList user={user} />
		</div>
	);
}
