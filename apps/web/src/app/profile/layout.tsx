import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { type ReactNode } from 'react';

type ProfileLayoutProps = {
	children: ReactNode;
};

export default function ProfileLayout({ children }: ProfileLayoutProps) {
	const links = [
		{
			label: 'Posts',
			href: '/profile/$id',
		},
		{
			label: 'Friends',
			href: '/profile/$id/friends',
		},
	] as const;

	return (
		<>
			<div className="w-full bg-[#252728] pt-40">
				<div className="mx-auto max-w-7xl bg-[#252728] text-white">
					<div className="flex justify-between items-end">
						<div className="h-40 w-40 rounded-full border-4 border-gray-900 overflow-hidden">
							<img
								src="https://via.placeholder.com/150"
								alt="Profile"
								className="h-full w-full object-cover"
							/>
						</div>

						<div className="ml-8 flex flex-1 flex-col pb-4">
							<h1 className="text-3xl font-bold">Marcin Witas</h1>
							<p className="text-gray-400 text-sm">510 friends</p>

							{/* Friends avatars */}
							<div className="flex -space-x-2 mt-2">
								{[...Array(6)].map((_, i) => (
									<div
										key={i}
										className="h-9 w-9 rounded-full border-2 border-gray-900 bg-gray-300 overflow-hidden"
									>
										<img
											src={`https://via.placeholder.com/32?text=${i + 1}`}
											alt={`Friend ${i + 1}`}
											className="h-full w-full object-cover"
										/>
									</div>
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
								<Link href={link.href}>{link.label}</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto">{children}</div>
		</>
	);
}
