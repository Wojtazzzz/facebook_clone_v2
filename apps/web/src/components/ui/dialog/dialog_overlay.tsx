'use client';

import { Overlay } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';

type DialogOverlayProps = {
	children: ReactNode;
};

export const DialogOverlay = ({ children }: DialogOverlayProps) => {
	return (
		<Overlay className="bg-black/50 fixed top-0 left-0 bottom-0 right-0 grid place-items-center overflow-y-auto">
			{children}
		</Overlay>
	);
};
