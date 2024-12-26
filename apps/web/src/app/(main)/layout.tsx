import { HomeIcon } from '@/components/icons/home_icon';
import { NotificationsIcon } from '@/components/icons/notifications_icon';
import { PersonIcon } from '@/components/icons/person_icon';
import { TriangleDownIcon } from '@/components/icons/triangle_down_icon';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

const links = [
	{
		href: '/',
		icon: HomeIcon,
		label: 'Home',
	},
	{
		href: '/',
		icon: PersonIcon,
		label: 'Friends',
	},
] as const;

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="bg-gray-200 min-h-screen space-y-8">
			<header className="sticky top-0 z-50 bg-white shadow-sm">
				<div className="flex h-14 items-center justify-between px-4">
					{/* Left section */}
					<div className="flex flex-1 items-center gap-2">
						<div className="flex h-16 w-16 items-center justify-center">
							<Image
								src="/logo.png"
								alt="Facebook"
								width={64}
								height={64}
								className="text-blue-500"
							/>
						</div>
						<div className="relative">
							<input
								type="text"
								placeholder="Search Facebook"
								// value={searchQuery}
								// onChange={(e) => setSearchQuery(e.target.value)}
								className="h-10 rounded-full bg-gray-100 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<svg
								className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>

					{/* Middle section - Navigation */}
					<nav className="flex flex-1 justify-center">
						<div className="flex">
							{links.map(({ href, label, icon: Icon }, index) => (
								<Link
									key={index}
									aria-label={label}
									href={href}
									className="flex w-24 text-2xl items-center justify-center text-gray-400"
								>
									<Icon size={26} />
								</Link>
							))}
						</div>
					</nav>

					{/* Right section */}
					<div className="flex flex-1 items-center justify-end gap-2">
						<div className="flex items-center gap-2">
							<button
								aria-label="Notifications"
								className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black"
							>
								<NotificationsIcon size={20} />
								<span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
							</button>
							<button
								aria-label="Options"
								className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black"
							>
								<TriangleDownIcon size={20} />
							</button>
						</div>
					</div>
				</div>
			</header>

			{children}
		</div>
	);
}
