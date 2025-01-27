'use client';

import { Root } from '@radix-ui/react-dialog';
import { useState, type ReactNode } from 'react';

type DialogRootProps = {
	children: ReactNode;
};

export const DialogRoot = ({ children }: DialogRootProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Root open={isOpen} onOpenChange={setIsOpen}>
			{children}
		</Root>
	);
};
