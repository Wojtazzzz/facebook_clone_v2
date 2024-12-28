import Link from 'next/link';
import { HomeIcon } from '../icons/home_icon';
import { PersonIcon } from '../icons/person_icon';
import { fetchMe } from '@/utils/fetch_me';

export const Navigation = async () => {
	const me = await fetchMe();

	const links = [
		{
			href: '/',
			icon: HomeIcon,
			label: 'Home',
		},
		{
			href: `/profile/${me.id}`,
			icon: PersonIcon,
			label: 'My profile',
		},
	] as const;

	return (
		<div className="flex h-full">
			{links.map(({ href, label, icon: Icon }, index) => (
				<Link
					key={index}
					aria-label={label}
					href={href}
					className="flex h-11/12 m-1 rounded-lg w-24 text-2xl items-center justify-center text-gray-400 hover:bg-bg-accent-hover"
				>
					<Icon size={26} />
				</Link>
			))}
		</div>
	);
};
