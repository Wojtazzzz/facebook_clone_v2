import Image from 'next/image';
import { Search } from './search';
import { Navigation } from './navigation';
import { Options } from './options';

export const Header = () => {
	return (
		<div className="sticky top-0 z-50 bg-[#252728] shadow-sm">
			<div className="flex h-14 items-center justify-between px-4">
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
