'use client';

import { Content } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';

type DialogContentProps = {
	children: ReactNode;
};

export const DialogContent = ({ children }: DialogContentProps) => {
	return (
		<Content className="text-white max-w-md w-full space-y-4 py-4 bg-bg-secondary rounded-lg shadow-sm">
			{children}
		</Content>
	);
};
