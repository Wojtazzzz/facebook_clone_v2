import Link from 'next/link';
import { HomeIcon } from '../icons/home_icon';
import { PersonIcon } from '../icons/person_icon';

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

export const Navigation = () => {
	return (
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
	);
};
