import { type ReactNode } from 'react';

type AuthLayoutProps = {
	children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<main className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 m-2 rounded-lg shadow-lg max-w-md w-full">
				<h1 className="text-center text-3xl font-bold text-blue-600 mb-6">
					Facebook
				</h1>

				{children}
			</div>
		</main>
	);
}
