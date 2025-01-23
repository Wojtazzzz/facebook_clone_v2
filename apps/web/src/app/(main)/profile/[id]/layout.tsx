import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { fetchUserProfile } from '@/modules/profile/utils/fetch_user_profile';
import Link from 'next/link';
import { type ReactNode } from 'react';

type ProfileLayoutProps = {
	params: Promise<{
		id: string;
	}>;
	children: ReactNode;
};

export default async function ProfileLayout({
	params,
	children,
}: ProfileLayoutProps) {
	const userId = (await params).id;

	const user = await fetchUserProfile(Number(userId));

	const links = [
		{
			label: 'Posts',
			href: `/profile/${user.id}`,
		},
		{
			label: 'Friends',
			href: `/profile/${user.id}/friends`,
		},
	] as const;

	return (
		<>
			<div className="w-full bg-bg-secondary pt-40">
				<div className="mx-auto max-w-7xl text-white">
					<div className="flex justify-between items-end">
						<Avatar
							src={user.image_url}
							alt={`${user.first_name} ${user.last_name}`}
							size="md"
						/>

						<div className="ml-8 flex flex-1 flex-col pb-4">
							<h1 className="text-3xl font-bold">
								{user.first_name} {user.last_name}
							</h1>
							<p className="text-gray-400 text-sm">
								{user.friends_count}{' '}
								{user.friends_count === 1
									? 'friend'
									: 'friends'}
							</p>

							{/* Friends avatars */}
							<div className="flex -space-x-2 mt-2">
								{user.friends.map((friend) => (
									<Avatar
										key={friend.id}
										src={friend.image_url}
										alt={`${friend.first_name} ${friend.last_name}`}
										size="sm"
									/>
								))}
							</div>
						</div>

						<div className="flex h-fit pb-4 space-x-2">
							<Button type="button">Edit profile</Button>
						</div>
					</div>

					<div className="border-t border-gray-700 mt-6">
						<div className="flex space-x-4 py-3 text-gray-400 font-semibold">
							{links.map((link, index) => (
								<Link key={index} href={link.href}>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto mt-8">
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

					<div className="flex-1">{children}</div>
				</div>
			</div>
		</>
	);
}
