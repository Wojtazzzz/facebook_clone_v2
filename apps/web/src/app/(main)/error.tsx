'use client';

import { Button } from '@/components/ui/button';

type ErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
	return (
		<div className="max-w-md mx-auto flex flex-col items-center">
			<div className="flex flex-col justify-center h-screen min-h-screen space-y-8 pb-20">
				<h1 className="text-4xl text-gray-100 font-bold">
					Something went wrong!
				</h1>

				<Button
					type="button"
					onClick={() => window.location.replace('/')}
				>
					Back to home page
				</Button>
			</div>
		</div>
	);
}
