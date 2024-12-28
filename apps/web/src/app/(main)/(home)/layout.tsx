import { type ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

export default function HomeLayout({ children }: MainLayoutProps) {
	return <div className="mx-auto max-w-2xl w-full">sss{children}</div>;
}
