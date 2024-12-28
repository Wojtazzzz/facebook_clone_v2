import { Header } from '@/components/header/header';
import { type ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="space-y-8">
			<header className="fixed top-0 left-0 z-30 w-full shadow-md">
				<Header />
			</header>
			{children}
		</div>
	);
}
