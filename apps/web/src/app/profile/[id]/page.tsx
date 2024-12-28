import { UserPostsList } from '@/modules/profile/components/user_posts_list';
import { fetchUserPosts } from '@/modules/profile/utils/fetch_user_posts';

type ProfilePostsPageProps = {
	params: Promise<{
		id: string;
	}>;
};

export default async function ProfilePostsPage({
	params,
}: ProfilePostsPageProps) {
	const userId = (await params).id;
	const user = await fetchUserPosts(Number(userId));

	return (
		<div className="flex flex-col md:flex-row items-start gap-6 text-white rounded-lg">
			<div className="flex flex-col bg-bg-secondary p-4 rounded-lg w-full md:w-1/3">
				<h3 className="text-xl font-semibold mb-4">Intro</h3>
				<button className="bg-bg-accent hover:bg-bg-accent-hover py-2 px-4 rounded-md mb-2">
					Add bio
				</button>
				<div className="text-gray-400 flex items-center mb-4">
					<span className="material-icons text-gray-500 mr-2">
						access_time
					</span>
					Joined May 2012
				</div>
				<button className="bg-bg-accent hover:bg-bg-accent-hover py-2 px-4 rounded-md mb-2">
					Edit details
				</button>
				<button className="bg-bg-accent hover:bg-bg-accent-hover py-2 px-4 rounded-md">
					Add featured
				</button>
			</div>

			<div className="flex-1 space-y-6">
				<div className="bg-bg-secondary rounded-lg p-4 mb-4">
					<input
						type="text"
						placeholder="What's on your mind?"
						className="w-full bg-bg-accent hover:bg-bg-accent-hover p-3 rounded-md text-gray-300"
					/>
				</div>

				<UserPostsList user={user} />
			</div>
		</div>
	);
}
