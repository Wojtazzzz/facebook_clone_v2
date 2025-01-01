import Image from 'next/image';
import { Search } from './search';
import { Navigation } from './navigation';
import { Options } from './options';
import Link from 'next/link';

export const Header = () => {
	return (
		<div className="sticky top-0 z-50 bg-bg-secondary shadow-sm">
			<div className="flex h-14 items-center justify-between px-4">
				<div className="flex flex-1 items-center gap-2">
					<div className="flex h-16 w-16 items-center justify-center">
						<Link href="/">
							<Image
								src="/logo.png"
								alt="Facebook"
								width={64}
								height={40}
								className="text-blue-500"
							/>
						</Link>
					</div>

					<Search />
				</div>

				<nav className="flex flex-1 justify-center h-full">
					<Navigation />
				</nav>

				<div className="flex flex-1 items-center justify-end gap-2">
					<Options />
				</div>
			</div>
		</div>
	);
};
