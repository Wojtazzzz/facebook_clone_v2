import { Header } from '@/components/header/header';
import { type ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="bg-gray-200 min-h-screen space-y-8">
			<header>
				<Header />
			</header>

			<div className="mx-auto max-w-2xl w-full">{children}</div>
		</div>
	);
}
